var fs = require('fs');
exports.doWhatItSays = function doWhatItSays(callback) {
    readFile(callback);
}

function readFile(callback) {
    fs.readFile("./assets/text/random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        callback(dataArr[0], dataArr[1]);
    });
}