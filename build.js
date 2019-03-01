const conf = require('./docs.json');

const fs = require('fs-extra');
const path = require('path');
const _ = require('lodash');
const lineByLine = require('n-readlines');

const ignore = [
    "node_modules",
    "release"
];

const ignoreList = _.map(_.concat(ignore, conf.ignore || []), ignored => path.resolve(ignored));

const walkSync = (dir, filelist, extension, ignoreList) => {
    files = fs.readdirSync(dir);
    filelist = filelist || [];
    files.forEach(file => {
        if (ignoreList.indexOf(path.join(dir, file)) >= 0) return;
        if (fs.statSync(path.join(dir, file)).isDirectory()) {
            filelist = walkSync(path.join(dir, file), filelist, extension, ignoreList);
        }
        else if (path.extname(file) == extension) {
            filelist.push(path.join(dir, file));
        }
    });
    return filelist;
};
const md_files = [];
walkSync(process.cwd(), md_files, '.md', ignoreList);
md_files.forEach(file => console.log(file));

const processFile = (file, variables, { start, count } = {start:0, count:null}, { skip, skipLast } = {skip:0, skipLast:0}) => {
    return new Promise(async (resolve, reject) => {
        console.log(`Processing ${file}`);
        let result = [];
        const liner = new lineByLine(file);
        let i = 0;
        while (lineBuffer = liner.next()) {
            let line = lineBuffer.toString();
            Object.keys(variables || {}).forEach((variable) => {
                line = line.replace(`<%${variable}%>`, variables[variable]);
            });
            console.log(`[${path.basename(file)}] ${line}`);
            let trimmedLine = line.trim();
            let shift = line.substr(0, line.indexOf(trimmedLine));
            if (trimmedLine.startsWith('<% --') && trimmedLine.endsWith('-- %>')) {
                const skips = trimmedLine.match('{([0-9]+),([0-9]+)}') || [];
                const range = trimmedLine.match('\\(([0-9]+),([0-9]+)\\)') || [];
                if (skips.length > 2) trimmedLine = trimmedLine.replace(skips[0], "");
                if (range.length > 2) trimmedLine = trimmedLine.replace(range[0], "");
                const _skip = skips[1] || 0;
                const _skipLast = skips[2] || 0;
                const _start = range[1] || 0;
                const _count = range[2] || 0;

                const modulePath = trimmedLine.substr(5, trimmedLine.length - 10).trim();
              
                console.log(`Loading module: ${path.resolve(modulePath)}`);
                if (fs.existsSync(modulePath)) {
                    let module_lines = await processFile(modulePath, variables, { start: _start, count: _count }, { skip: _skip, skipLast: _skipLast });
                    module_lines = _.map(module_lines, line => shift + line);
                    result.push(...module_lines);
                }
            } else {
                result.push(line);
            }
        }
        result = result.slice(start || 0, count || result.length);
        result = result.slice(skip || 0, result.length - (skipLast || 0));
        resolve(result);
    });
}

const processLinkedPage = (file, variables) => {
    return new Promise(async (resolve, reject) => {
        console.log(`Processing ${file}`);
        const result = [];
        const liner = new lineByLine(file);
        while (lineBuffer = liner.next()) {
            let line = lineBuffer.toString().trim();
            Object.keys(variables || {}).forEach((variable) => {
                line = line.replace(`<%${variable}%>`, variables[variable]);
            });
            console.log(`[${path.basename(file)}] ${line}`);
            result.push(line);
        }

        resolve(result);
    });
}

(async () => {
    fs.emptyDirSync('release');
    conf.projects.forEach(project => {
        console.log(`Processing ${project.id}...`);
        const outputDir = path.join(path.resolve(project.output));
        const project_path = path.resolve(project.path);
        const project_files = _.filter(md_files, file => file.includes(project_path));
        const project_linked_pages = project.linkedPages || [];

        project_files.forEach(async (file) => {
            const outputFileContent = await processFile(file, project.variables);
            const _module = path.dirname(path.relative(project_path, file));
            let fileName = `${path.basename(file)}`;
            if (_module && !_module.startsWith('.')) {
                fileName = `[${_module}] ${fileName}`;
            }
            const outputFilePath = path.join(outputDir, fileName);
            fs.mkdirpSync(path.dirname(outputFilePath));
            fs.writeFileSync(outputFilePath, _.join(outputFileContent, '\n'));
            console.log(`Project file - ${file} processed and output saved to ${outputFilePath}`);
        });

        project_linked_pages.forEach(async page => {
            const file = path.resolve(page.page)
            const outputFileContent = await processFile(file, project.variables,{ skip: page.startLine || 0, skipLast: page.linesCount || 0 }, { skip: page.skipLines || 0, skipLast: page.skipLastLines || 0 });
            const _module = path.dirname(page.outputPath);
            let fileName = `${path.basename(page.outputPath)}`;
            if (_module && !_module.startsWith('.')) {
                fileName = `[${_module}] ${fileName}`;
            }
            const outputFilePath = path.join(outputDir, fileName);

            fs.mkdirpSync(path.dirname(outputFilePath));
            fs.writeFileSync(outputFilePath, _.join(outputFileContent, '\n'));
            console.log(`Project linked page - ${file} processed and output saved to ${outputFilePath}`);
        });
        //console.log(`Project ${project.id} processed and output saved to ${outputDir}`);
    });
})();