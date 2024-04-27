// Name Cases: Store a person’s name in a variable, and then print 
//that person’s name in lowercase, uppercase, and titlecase.

let userName:string="Sadaqat Ali";
// uppercase
console.log(`${userName}`.toUpperCase());
// lowercase
console.log(`${userName}`.toLowerCase());
// titlecase
console.log(`${userName}`.replace(/\bw/g,`c=>c`.toUpperCase()));