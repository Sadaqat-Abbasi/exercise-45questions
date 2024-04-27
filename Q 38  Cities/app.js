// 38. Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city_name, country_name) {
    return "".concat(city_name, " is in ").concat(country_name);
}
var city1 = describe_city("karachi", "Pakistan");
var city2 = describe_city("delhi", "India");
var city3 = describe_city("cape town", "South Africa");
var city4 = describe_city("dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
