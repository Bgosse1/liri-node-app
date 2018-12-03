var concertThis = require('./assets/javascript/concert-this.js'); 
var spotify =  require('./assets/javascript/spotify.js');
var omdb =  require('./assets/javascript/omdb.js');

var command = process.argv[2];
var userInput = process.argv[3];

 switch(command) {
      case "concert-this":
         concertThis.getConcertInfo(userInput);
         break;
      case "spotify-this-song":
          spotify.getSpotifyInfo(userInput);
         break;
     case "movie-this":
         omdb.getOmbdInfo(userInput);
         break;
//     case "do-what-it-says":
//         code block
//         break;
    default:
         return console.log("Not A Valid Command")
 }









