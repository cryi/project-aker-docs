1. install unzip
    - Ubuntu: `apt install unzip -y`

1.  Download and prepare **unit** binary
    ```sh
        LATEST=$(curl -sL https://api.github.com/repos/cryon-io/unit/releases/latest | grep tag_name | sed 's/  "tag_name": "//g' | sed 's/",//g')
        wget https://github.com/cryon-io/unit/releases/download/$LATEST/unit-linux-x64.zip -O unit.zip && \
        unzip -o unit.zip && \
        mv unit-linux-x64 /usr/sbin/unit && \
        chmod +x /usr/bin/unit
    ```
    - (optional) `./unit help`        # check help 

1.  Prepare **/etc/unit/unit.json** configuration file
    - `mkdir -p /etc/unit/ && nano /etc/unit/unit.json`
    - for examples check out [templates](https://github.com/cryon-io/unit/tree/master/templates) in this repository.
