module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
    "env": {
        "browser": true,
        "node": true,
        "mocha": true
    },
    "rules" : {
        "strict" : ["off","global"],
        "no-tabs" : 1,
        "no-console": 1,
        "no-mixed-spaces-and-tabs": 1
    }
};