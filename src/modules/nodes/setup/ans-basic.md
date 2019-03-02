1.  - `git clone "https://github.com/cryon-io/ans.git" [path] && cd [path] && chmod +x ./ans` # replace path with directory you want to store node in
   
    or  
    - `wget https://github.com/cryon-io/ans/archive/master.zip && unzip -o master.zip && mv ./ans-master [path] && cd [path] && chmod +x ./ans`
1. one of commands below depending of your preference (run as *root* or use *sudo*)
    - `./ans --full --node=<%NODE_TYPE%>` # full setup of Ether1 SN/MN for current user
    - `./ans --full --user=[user] --node=<%NODE_TYPE%> --auto-update-level=[level]` # full setup of Ether1 SN/MN for defined user (directory location and structure is preserved) sets specified auto update level (Refer to [Auto updates](https://github.com/cryon-io/ans/wiki/Auto-Updates))