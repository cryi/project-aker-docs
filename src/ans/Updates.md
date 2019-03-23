### Automatic

```sh
./ans --auto-update-level=[level]   # enables auto updates based on level
                                    # 0 - node binary updates only
                                    # 1 - binary and service updates
                                    # 2 - above + ANS updates
./ans --disable-auto-update         # disables auto updates
```

### Manual

```sh
./ans --update-node       # updates node binaries
./ans --update-service    # updates service definition
./ans --update-ans        # updates ANS
```

## Standalone

Standalone built automatically installs latest node binary on build. Run:
```sh
    docker-compose up --build # optionaly add project-name and path to docker-compose.yml
```