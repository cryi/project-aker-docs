- `container/`          # container definition
- `data/`               # only directory from host filesystem accessible to running node 
                        # contains daemon data (chain, wallet, etc.)
- `tools/`              # contains utility scripts
- `docker-compose.yml`  # node service definition
- `geth`                # access to node `geth`, use it as binary, e.g. `geth help`