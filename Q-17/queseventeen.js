// Question No. 17
// Names stores in an array
var guestList = ["Malaika", "Asiya", "Faiza", "Fiza", "Alina", "Haniya"];
// Notify that the guest list needs to be shrunk
console.log("Unfortunately, my new table won’t arrive in time, and I can only invite two guests.");
// Remove guests until only two are left
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, " + removedGuest + ", I can no longer invite you to dinner.");
}
// Print a message to each of the remaining guests
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear " + guestList[i] + ", you are still invited to dinner.");
}
