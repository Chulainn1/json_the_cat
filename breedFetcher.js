const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      // console.log("Request Failed!:", error);
      callback(error, null);
    }
    if (response && response.statusCode === 200) {
      if (body === "[]") {
        // console.log(`no cats called ${breedName} found`);
        callback(`no cats called ${breedName} found`, null);
      } else {
        const data = JSON.parse(body);
        // console.log(data[0].description);
        callback(null ,data[0].description);
      }
    
    }

  });

};


module.exports = { fetchBreedDescription };

// | grep "status"
// console.log('error', error);
// console.log('statusCode:', response && response.statusCode);
