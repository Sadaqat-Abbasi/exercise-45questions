// 12. Greetings: Start with the array you used in Exercise 11,
//  but instead of just printing 
// each person’s name, print a message to them. The text of each message
// should be the same, 
// but each message should be personalized with the person’s name.
var names = ['Abdullah', 'Sadaqat', 'Aslam', 'Arshad', 'Hamza'];
for (var i = 0; i < names.length; i++) {
    console.log("hello mr: ".concat(names[i], ", how are you?"));
}
;
