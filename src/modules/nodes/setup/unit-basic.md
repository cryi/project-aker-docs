* Download and prepare **unit** binary
    ```sh
        LATEST=$(curl -sL https://api.github.com/repos/cryon-io/unit/releases/latest | grep tag_name | sed 's/  "tag_name": "//g' | sed 's/",//g')
        wget https://github.com/cryon-io/unit/releases/download/$LATEST/unit-linux-x64.zip -O unit.zip && \
        unzip -o unit.zip && \
        mv unit-linux-x64 unit && \
        chmod +x unit
    ```

* Prepare **unit.json** configuration file (has to be in same directory as `unit` binary)