/*

Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

*/
let numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let con_element = '';

for (let i of numbers) {
    con_element = con_element + i;
}

console.log(con_element);