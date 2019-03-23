### Automatic

Automatic updates of **Unit** 
```sh
./unit auto-update apply    # applies Unit auto updates configuration from unit.json
./unit auto-update status   # prints status of Unit auto updates
```

Automatic updates of nodes are configured through **unit.json** and `"auto_updates"` value.
```json
{
    ...
     "nodes": [
    {
        ...
        "auto_updates": [ "node", "service" ],
        ...
    }
    ]
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
*Automatic updates are enabled automatically on setup or manually by `unit auto-update apply`, if configured in unit.json*

Available `"auto_update"` values:
    <% -- src/modules/unit/node-update-levels.md -- %>
    
### Manual

```sh
unit update                     # updates all nodes defined in unit json -  including node service definition and ans
unit update [node id]           # updates specific nodes based on ids defined in unit json - including node service definition and ans
unit smart-update               # updates all nodes tolerating unit.json auto update configuration and pruning docker in case it is configured in unit.json 
unit smart-update [node id]     # updates specific nodes based on ids tolerating unit.json auto update configuration and pruning docker in case it is configured in unit.json 
```