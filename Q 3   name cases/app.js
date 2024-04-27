// Name Cases: Store a person’s name in a variable, and then print 
//that person’s name in lowercase, uppercase, and titlecase.
var userName = "Sadaqat Ali";
// uppercase
console.log("".concat(userName).toUpperCase());
// lowercase
console.log("".concat(userName).toLowerCase());
// titlecase
console.log("".concat(userName).replace(/\bw/g, "c=>c".toUpperCase()));
