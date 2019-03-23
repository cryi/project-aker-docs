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