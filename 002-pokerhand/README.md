# vscode

Live Server and Run On Save must work together.

* https://www.youtube.com/watch?v=IIKndRX5qHw
* install emeraldwalk Run On Save

```
    "emeraldwalk.runonsave": {
        "autoClearConsole":true,
        "commands": [
            {
                "match": "\\.js$",
                "cmd":"cd ${workspaceRoot} && node ${file} > tcr.txt && git commit -am 'working' || git reset --hard "
            },
        ]
    },
```
* make sure git is working
* npm init
* function assert(flag) {if (!flag) {throw 'assert error!';}}

* Problem

* When an execution error occurs the coffeescript line numbers in the stack trace refers to the javascript files.
* To run sometimes a dummy change has to be made.