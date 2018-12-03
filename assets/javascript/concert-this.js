require('dotenv').config();
var axios = require('axios');
var moment = require('moment');
var keys = require("./keys.js");

var exports = module.exports = {};
var app_id = keys.bandsintown.appID;
exports.getConcertInfo = function getConcertInfo(artist){
    axios
      .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id="+app_id)
      .then(function(response) {
        console.log(JSON.stringify(response.data[0].venue.name));
        console.log(JSON.stringify(response.data[0].venue.city)+","+JSON.stringify(response.data[0].venue.country));
        console.log(moment(response.data[0].datetime).format('MM/DD/YYYY'));
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