- `container/`                      # container definition
- `data/`                           # only directory from host filesystem accessible to running node
                                    # contains daemon data (chain, wallet, **debug.log**, etc.)
    - `<%DaemonName%>.conf`         # configuration file for <%ProjectName%> daemon               
- `tools/`                          # contains utility scripts
- `docker-compose.yml`              # node service definition
- `<%DaemonName%>-cli`              # access to node `<%DaemonName%>-cli`, use it as binary, e.g. `<%DaemonName%>-cli help`