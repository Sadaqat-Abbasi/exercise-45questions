"use strict";
// 14. Guest List: If you could invite anyone, living or deceased,
// to dinner, who would you invite?
//  Make a list that includes at least three people you’d like to
// invite to dinner. Then use your 
// list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
var guest_list = ['Abdullah', 'Sadaqat', 'Arshad', 'Aslam', 'Hamza'];
exports.guest_list = guest_list;
for (var i = 0; i < guest_list.length; i++) {
    console.log("respected ".concat(guest_list[i], ", we invited you on dinner tomorrow"));
}
;
