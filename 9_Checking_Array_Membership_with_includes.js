/*

Create an array of books containing different book.
Use the includes method to check if the array contains a javascript book.
Print a message to the console indicating whether the element is present in the array or not.

*/

let books = ['javascript', 'c', 'c++', 'python'];

// array.includes(element, fromIndex);
console.log("Presence Status: ", books.includes('javascript'));

console.log("Presence Status after 1 index: ", books.includes('javascript', 1));
