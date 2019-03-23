- `off`       # no auto updates
- `node`      # auto updates node binaries
- `service`   # auto updates node node container definition
- `ans`       # auto updates ans
- `all`       # all above 

You can define combinations of above in unit.json as array:

```json
    ...
     "nodes": [
    {
        ...
        "auto_updates": [ "node", "service" ],
        ...
    }
    ]
    ...
```