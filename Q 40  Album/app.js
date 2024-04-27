"use strict";
// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
function my_album(artistName, albumTitle) {
    return `${artistName} wrote a novel ${albumTitle}`;
}
let album1 = my_album("Ali", "roshan andhera");
let album2 = my_album("wasif ali wasif", "khamosh gulistan");
let album3 = my_album("sheeraz", "ujla chamman");
console.log(album1);
console.log(album2);
console.log(album3);
function my_album2(artistName, albumTitle, no_of_tracks) {
    return `${artistName} wrote a novel ${albumTitle} with ${no_of_tracks} no of tracks`;
}
let album4 = my_album2("hamza", "rang-e-muhabbat", 4);
let album5 = my_album2("wasif ali", "dil he", 3);
let album6 = my_album2("sadaqat", "mausam e dil", 2);
console.log(album4);
console.log(album5);
console.log(album6);
