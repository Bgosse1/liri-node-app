var fs = require('fs');

exports.logCommand = function logCommand(command, userInput) {
    appendToLog(command, userInput);
}

function appendToLog(command, userInput) {
    var text = command + "," + userInput + "\n";
    fs.appendFile("./assets/text/log.txt", text, function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Command Logged!");
        }
    });
}