//16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
//bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
var guest_list = ['Abdullah', 'Sadaqat', 'Arshad', 'Aslam', 'Hamza'];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`respected ${guest_list[i]}, we invited you on dinner tomorrow`);
// };
var not_presant = "hamza";
var new_presant = "Ronaldo";
guest_list[4] = new_presant;
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected ".concat(guest_list[i], ", we invited you on dinner tomorrow"));
}
;
guest_list.unshift('hammad', 'sherry', 'imdad');
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected ".concat(guest_list[i], ", we invited you on dinner tomorrow due to arrangement of bigger table-"));
}
;
