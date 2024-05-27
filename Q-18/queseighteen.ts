// Question No. 18

// Array stores the names of places to visit
const placesToVisit: string[] = ["Canada", "Paris", "New York", "Sydney", "Dubai"];

// Print the original array
console.log("Original list of places to visit:" + placesToVisit);

// Print the array in alphabetical order without altering the original array
const sortedPlaces = [...placesToVisit].sort();
console.log("List of places in alphabetical order:" + sortedPlaces);

// Print the array in reverse alphabetical order without altering the original array
const reverseSortedPlaces = [...placesToVisit].sort().reverse();
console.log("List of places in reverse alphabetical order:" + reverseSortedPlaces);

// Print the original array to show it's unchanged
console.log("Original list of places to visit (unchanged):" + placesToVisit);

// Reverse the order of the array and print it
const reversedPlaces = [...placesToVisit].reverse();
console.log("List of places in reverse order:" + reversedPlaces);

// Print the original array to show it's still unchanged
console.log("Original list of places to visit (still unchanged):" + placesToVisit);