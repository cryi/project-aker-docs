## ANS Folder Structure

- `ans`                             # `ans` core script - management and setup, for usage check Help
- `is-up`                           # `is-up` script - used to check whether node is running or not
- `cli`                             # `cli` script - wrapper for direct access to node cli
- `_ans_methods`                    # methods used by ans
- `node.info`                       # last retrieved node.info by `./ans -i` command
- `supported_nodes.json`            # list of supported nodes with links to repositories
- `state/`                          # contains configured parameters, env variables, configuration other ans state specifics
- `containers/`                     # contains current and past nodes configured by ANS
    - `[NODE_TYPE]`                 # contains node repository with node specific configuration
                                    # for node repository folder structure check wiki of node you are interested in
