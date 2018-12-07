var concertThis = require('./assets/javascript/concert-this.js');
var spotify = require('./assets/javascript/spotify.js');
var omdb = require('./assets/javascript/omdb.js');
var dwis = require('./assets/javascript/dowhatitsays.js');
var log = require('./assets/javascript/log.js');


var command = process.argv[2];
var userInput = process.argv.slice(3).join(" ");

function runCommand(command, userInput) {
    log.logCommand(command, userInput);
    switch (command) {
        case "concert-this":
            concertThis.getConcertInfo(userInput);
            break;
        case "spotify-this-song":
            spotify.getSpotifyInfo(userInput);
            break;
        case "movie-this":
            omdb.getOmbdInfo(userInput);
            break;
        case "do-what-it-says":
             dwis.doWhatItSays(runCommand);
            break;
        default:
            return console.log("Not A Valid Command")
    }

}

runCommand(command, userInput);




