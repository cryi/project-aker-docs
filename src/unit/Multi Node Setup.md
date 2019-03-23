<% -- src/modules/nodes/setup/unit-basic.md -- %>
    
    - multiply nodes under `nodes` and configure binds according to your setup. 
    - multi node unit.json

    ```json
    <% -- ../unit-repository/templates/etho/multi-node/unit.json -- %>
    ```
<% -- src/modules/nodes/setup/unit-setup-n-check.md -- %>

*Remember, you CAN combine different types of nodes inside unit.json without need for binds. Binds and separate IPs are required only, if you run nodes of same type and these nodes has to run on same public port*
