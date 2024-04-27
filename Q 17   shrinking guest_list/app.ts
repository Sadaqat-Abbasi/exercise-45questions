// only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

let guest_list:string[]=['Abdullah','Sadaqat','Arshad','Aslam','Hamza'];
// for(let i=0; i<guest_list.length; i++){
//     console.log(`respected ${guest_list[i]}, we invited you on dinner tomorrow`);
// };
let not_presant:string="hamza";
let new_presant:string="Ronaldo";
guest_list[4]=new_presant;
// for(let i=0; i<guest_list.length; i++){
//     console.log(`respected ${guest_list[i]}, we invited you on dinner tomorrow`);
// };
guest_list.unshift('hammad','sherry','imdad')
// for(let i=0; i<guest_list.length; i++){
//     console.log(`respected ${guest_list[i]}, we invited you on dinner tomorrow due to arrangement of bigger table-`);
// };
console.log("due to some issues the bigger table cant arranged so we have space for three persons only")
while(guest_list.length>2){
    let remove_guests=guest_list.pop()
    console.log(`mr ${remove_guests} you are not invited on dinner tomorrow`)
}
for(let i=0; i<guest_list.length; i++){
    console.log(`respected ${guest_list[i]}, we still invited you on dinner`);
};
guest_list.splice(0,2);
console.log(guest_list);
