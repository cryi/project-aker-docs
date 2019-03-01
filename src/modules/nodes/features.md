Features of node template as is (without use of ANS or Unit):
- downloads latest binary version on build
- auto heal - checks for node health status and auto restarts
- node process separation - node access to host system is limited by containerization
- easy migrations - build on another host and supply data folder to restore node state (may require update of IP addresses or other configurable parameters)
- persistence - node state is preserved after container rebuilt
- isolates nodes from host system 
    - secures host system (node process does not have access to host system and is NEVER executed under root privileges)
    - prevents package conflicts and host system bloating