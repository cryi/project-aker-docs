Although it is possible to run ANS or standalone multi node setup, it is highly recommended to use [Unit](https://github.com/cryon-io/unit). It is built with multi node support in mind.

## [Unit](https://github.com/cryon-io/unit)

<% -- src/modules/nodes/setup/unit-basic.md -- %>
    
    - multiply nodes under `nodes` and configure binds according to your setup. 
    - multi node unit.json

    ```json
    <% -- ../unit-repository/templates/etho/multi-node/unit.json -- %>
    ```
<% -- src/modules/nodes/setup/unit-setup-n-check.md -- %>

*Remember, you CAN combine different types of nodes inside unit.json without need for binds. Binds and separate IPs are required only, if you run nodes of same type and these nodes has to run on same public port*

## [ANS](https://github.com/cryon-io/ans)

1. Prepare multiple instance of ANS
2. Configure according (check dos - [ANS Setup](https://github.com/<%Repository%>/wiki/setup/ANS))
    - use `--project-name=[name]` to identify instance
    - use `--bind=[binding]` e.g. `--bind=192.168.0.1:30305:30305`
    - check docker-compose.yml ports section for exposed ports
    ```yml
    ports:
      - "30305:30305" # exposes 30305 to 30305
    ```
    - Sample of ans command:
    ```sh
    ./ans --full --user=John --node=<%NODE_TYPE%> --auto-update-level=2 --bind=192.168.0.1:30305:30305
    ```
3. check each node status with `ans --node-info`

## Standalone 

1. clone repository as many times as you require
2. configure according (check docs - [Standalone Setup](https://github.com/<%Repository%>/wiki/setup/Standalone))
3. configure bindings inside docker-compose.yml
4. run docker-compose run with `--project-name [project name]`
    - **use different project name for each instance**