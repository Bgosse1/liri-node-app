var fs = require('fs');
exports.doWhatItSays = function doWhatItSays(callback) {
    readFile(callback);
}

function readFile(callback) {
    fs.readFile("./assets/text/random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = cleanData(data.split(","));
        callback(dataArr[0], dataArr[1]);
    });
}
// Clean Data to remove " " from the string, causes errors in concet-this command
 function cleanData(dataArray){
     for(var i = 0; i < dataArray.length; i++){
        dataArray[i] = dataArray[i].replace(/['"]+/g, '');
     }
     return dataArray;
 }