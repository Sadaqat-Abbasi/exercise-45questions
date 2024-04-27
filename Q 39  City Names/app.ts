// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.

function city_country(cityName: string, countryName: string) {
  return `${cityName} , ${countryName}`;
}
let my_cities = city_country("lahore", "pakistan");
console.log(my_cities);

console.log(city_country("delhi", "india"));
console.log(city_country("cape town", "south africa"));
console.log(city_country("dubai", "uae"));
console.log(city_country("kawasaki", "japan"));
