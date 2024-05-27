// Question No. 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array stores the names of places to visit
var placesToVisit = ["Canada", "Paris", "New York", "Sydney", "Dubai"];
// Print the original array
console.log("Original list of places to visit:" + placesToVisit);
// Print the array in alphabetical order without altering the original array
var sortedPlaces = __spreadArray([], placesToVisit, true).sort();
console.log("List of places in alphabetical order:" + sortedPlaces);
// Print the array in reverse alphabetical order without altering the original array
var reverseSortedPlaces = __spreadArray([], placesToVisit, true).sort().reverse();
console.log("List of places in reverse alphabetical order:" + reverseSortedPlaces);
// Print the original array to show it's unchanged
console.log("Original list of places to visit (unchanged):" + placesToVisit);
// Reverse the order of the array and print it
var reversedPlaces = __spreadArray([], placesToVisit, true).reverse();
console.log("List of places in reverse order:" + reversedPlaces);
// Print the original array to show it's still unchanged
console.log("Original list of places to visit (still unchanged):" + placesToVisit);
