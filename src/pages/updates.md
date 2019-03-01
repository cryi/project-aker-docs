## [Unit](https://github.com/cryon-io/unit)

### Manual

```sh
unit update # updates all nodes defined in unit json -  including node service definition and ans
unit update [node id] # updates node based on id defined in unit json - including node service definition and ans
```

### Automatic

Automatic updates of **Unit** 
```sh
./unit auto-update enable   # enables Unit auto updates
./unit auto-update status   # prints status of Unit auto updates
./unit auto-update disable  # disables Unit auto updates
```

Automatic updates of nodes are configured through **unit.json** and `"auto_updates"` value.
```json
{
    ...
    "auto-updates" : "all",
    ...
}
```
To globally configure auto-updates (for all nodes inside unit.json) you can specify `"auto_updates"` inside `"global"`
```json
{
    "global" : {
        "auto_updates" : "all"
    },
    "nodes": [
        ...
    ]
}
```
Available `"auto_update"` values:
    <% -- src/unit/node-update-levels.md -- %>


## [ANS](https://github.com/cryon-io/ans)

### Manual

```sh
./ans --update-node       # updates node binaries
./ans --update-service    # updates service definition
./ans --update-ans        # updates ANS
```

### Automatic

```sh
./ans --auto-update-level=[level]   # enables auto updates based on level
                                    # 0 - node binary updates only
                                    # 1 - binary and service updates
                                    # 2 - above + ANS updates
./ans --disable-auto-update         # disables auto updates
```
## Standalone

Standalone built automatically installs latest node binary on build. Run:
```sh
    docker-compose up --build # optionaly add project-name and path to docker-compose.yml
```