/*

Create different variables, each containing either an array or a non-array value.
Now use isArray to check if each variable is an array.
Print a message to the console indicating whether each variable is an array or not.

*/

let a = 10;
let b = 'nothing';
let c = 10.5;
let d = [1, 5, 2];

console.log(Array.isArray(a));
console.log(Array.isArray(b));
console.log(Array.isArray(c));
console.log(Array.isArray(d));

if (Array.isArray(d) === true) {
    console.log(d, "- This is an array");
}