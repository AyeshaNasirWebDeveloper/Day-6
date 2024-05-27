// Question No.16
// More Guests: You've found a bigger dinner table, so there's room for more guests.
// Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.
var guestList = ["Ayesha", "Sadia", "Uroosa", "Shagufta"];
// Add in start
guestList.unshift("Asiya");
// Add in a Middle
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Malaika");
// Add in last
guestList.push("Fariha");
// For Loop
for (var i = 0; i < guestList.length; i++) {
    console.log("Asalaam o Alikum Dear " + guestList[i] + ", You are cordially invited to Dinner.");
}
