const myArgs = process.argv.slice(2);
const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=' + myArgs[0], (error, response, body) => {
  if (error) {
    console.log("Request Failed!:", error);
  }
  if (response && response.statusCode === 200) {
    if (body === "[]") {
      console.log(`no cats called ${myArgs[0]} found`);
    } else {
      const data = JSON.parse(body);
      console.log(data[0].description);
    }
    
  }

});


// | grep "status"
// console.log('error', error);
// console.log('statusCode:', response && response.statusCode);
