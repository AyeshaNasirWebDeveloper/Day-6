// Question No.16

let guestList : string[] = ["Ayesha", "Sadia", "Uroosa", "Shagufta"];

// Add in start
guestList.unshift("Asiya")

// Add in a Middle
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Malaika");

// Add in last
guestList.push("Fariha")

// For Loop
for(let i = 0; i < guestList.length; i++){
    console.log("Asalaam o Alikum Dear " + guestList[i] + ", You are cordially invited to Dinner.");
}