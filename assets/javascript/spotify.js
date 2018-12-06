require('dotenv').config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var exports = module.exports = {};

exports.getSpotifyInfo = function getSpotifyInfo(songName) {
    const defaultSong = "The Sign";
    if (songName === "") {
        callService(defaultSong);
    }
    else {
        callService(songName);
    }

}
function callService(songName) {
    spotify
        .search({ type: 'track', query: songName })
        .then(function (response) {
            foramtResponse(response);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function foramtResponse(response) {
    var artists = [];
    for (var i = 0; i < response.tracks.items.length; i++) {
        for (var j = 0; j < response.tracks.items[i].artists.length; j++) {
            artists.push(response.tracks.items[i].artists[j].name);
        }
        console.log(
            "Artist(s): " + artists.join(", ") + "\n" +
            "Song Name: " + response.tracks.items[i].name + "\n" +
            "Spotify Preview Link: " + response.tracks.items[i].preview_url + "\n" +
            "Album: " + response.tracks.items[i].album.name + "\n"
        );
        artists = [];
    }
}