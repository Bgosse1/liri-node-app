require('dotenv').config();
var axios = require('axios');
var keys = require("./keys.js");
var exports = module.exports = {};
var apiKey = keys.omdb.apiKey;

exports.getOmbdInfo = function getOmdbInfo(movie) {
  const defaultMovie = "Mr. Nobody";
  if (movie === "") {
    console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
    console.log("It's on Netflix!");
    serviceCall(defaultMovie);
  }
  else {
    serviceCall(movie);
  }
}

function serviceCall(movie) {
  axios
    .get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + movie)
    .then(function (response) {
      console.log(
        "Title: " + response.data.Title + "\n" +
        "Year: " + response.data.Year + "\n" +
        "IMDB Rating: " + getRating(response, "Internet Movie Database") + "\n" +
        "Rotten Tomato Rating: " + getRating(response, "Rotten Tomatoes") + "\n" +
        "Country of Production: " + response.data.Country + "\n" +
        "Movie Language: " + response.data.Language + "\n" +
        "Plot: " + response.data.Plot + "\n" +
        "Actors: " + response.data.Actors
      );
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


function getRating(response, ratingSource) {
  var foundMatch = false;
  var rating = "";
  for (var i = 0; i < response.data.Ratings.length; i++) {
    if (response.data.Ratings[i].Source === ratingSource) {
      foundMatch = true;
      rating = response.data.Ratings[i].Value;
    }
  }
  if (foundMatch === true) {
    return rating;
  }
  else {
    return "No Rating Was Found."
  }


}