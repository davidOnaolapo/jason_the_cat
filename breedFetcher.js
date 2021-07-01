const request = require('request');
const breed = process.argv.slice(2);

if (breed.length !== 1) {
  console.log(breed.length );
  console.log("Nah B");
} else {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed[0]}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  body = JSON.parse(body);
  if (body.length > 0) {
   console.log(body[0].description);
  } else if (error) {
    console.log(error);
  } else if (body.length === 0) {
    console.log("We couldn't find the cat you asked for bro, sorry");
  }
});
}





