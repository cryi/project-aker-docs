**WARNING: These steps may differ based on your OS. This setup is recommended ONLY for advanced users.**

## Install docker and docker-compose
1. install docker according to the [official documentation](https://docs.docker.com/install/) 
2. install docker-compose according to [official documentation](https://docs.docker.com/compose/install/)

## Setup and start node
* `git clone "https://github.com/<%Repository%>.git" [path] && cd [path]` # replace path with directory you want to store node in

* set write permissions for user id 10000 for directory ./data and its subdirectories

    - on unix based systems with POSIX shell you can use: 
        `sh ./tools/fs-permissions.sh` # configures data permissions automatically
    - (non default) if you use user remap feature in docker, set allow write permission for user remap id + 10000 (`fs-permissions.sh` handles this automatically)