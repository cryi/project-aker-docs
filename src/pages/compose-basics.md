## docker-compose
- `docker-compose down` # stops node
- `docker-compose up` # starts node with log output into console
- `docker-compose up -d` # starts node in detached mode (no console output)
- `docker-compose logs` # displays log output from services
- `docker-compose -f /some/path/docker-compose.yml up` # 

## docker
- `docker exec --user etho -it [container id] bash` # opens bash inside container
- `docker ps` # lists running containers (you can find out container id in left column)