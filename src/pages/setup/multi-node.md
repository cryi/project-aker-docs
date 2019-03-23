Although it is possible to run ANS or standalone multi node setup, it is highly recommended to use [Unit](https://github.com/cryon-io/unit). It is built with multi node support in mind.

## [Unit](https://github.com/cryon-io/unit)

<% -- src/unit/Multi Node Setup.md -- %>

## [ANS](https://github.com/cryon-io/ans)

<% -- src/ans/Multi Node Setup.md -- %>

## Standalone 

1. clone repository as many times as you require
2. configure according (check docs - [Standalone Setup](https://github.com/<%Repository%>/wiki/setup/Standalone))
3. configure bindings inside docker-compose.yml
4. run docker-compose run with `--project-name [project name]`
    - **use different project name for each instance**