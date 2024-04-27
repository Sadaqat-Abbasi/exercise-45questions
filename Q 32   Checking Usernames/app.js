"use strict";
let current_users = ["ali", "hussain", "ismail", "hamza", "admin"];
let new_users = ["hammad", "shoaib", "hamza", "admin", "hussain"];
// new_users.forEach((newUser) => {
//   if (
//     current_users.some(
//       (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
//     )
//   ) {
//     console.log(`${newUser} will need to enter a new username`);
//   } else {
//     console.log(`${newUser} is available`);
//   }
// });
//  [2nd]   new_users.forEach((newUser) => {
//   if (
//     current_users.some(
//       (currentUser) => newUser.toLowerCase() === currentUser.toLowerCase()
//     )
//   ) {
//     console.log(`${newUser} will need to enter a new username`);
//   } else {
//     console.log(`${newUser} already awailable`);
//   }
// });
// new_users.forEach((newUser) => {
//   if (
//     current_users.some(
//       (currentUser) => newUser.toLowerCase() === currentUser.toLowerCase()
//     )
//   ) {
//     console.log(`${newUser} will need to enter a username`);
//   } else {
//     console.log(`${newUser} are available `);
//   }
// });
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a username`);
    }
    else {
        console.log(`${newUser} already available`);
    }
});
