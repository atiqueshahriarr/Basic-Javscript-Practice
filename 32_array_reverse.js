/*

Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']

*/


const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const rev_colors = [];
for (let i = 0; i < colors.length; i++) {
    rev_colors.unshift(colors[i]);
}
console.log(colors);
console.log(rev_colors);


const r_colors = [];
let j = colors.length - 1;
while (j >= 0) {
    r_colors.push(colors[j]);
    j--;
}
console.log(r_colors);