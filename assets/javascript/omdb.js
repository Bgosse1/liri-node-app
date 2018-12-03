require('dotenv').config();
var axios = require('axios');
var keys = require("./keys.js");
var exports = module.exports = {};
var apiKey = keys.omdb.apiKey;
exports.getOmbdInfo = function getOmdbInfo(movie){
    axios
      .get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + movie)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
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