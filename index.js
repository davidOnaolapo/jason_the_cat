const { fetchBreedDescription } = require('./breedFetcher');

const breed = process.argv.slice(2);

if (breed.length !== 1) {
  console.log("You need to enter just one cat breed we can search");
} else { 
  fetchBreedDescription(breed[0], (error, desc) => {
    if (error) {
      console.log("Error with fetching details", error);
    } else {
      console.log(desc);
    } 
  });
}








