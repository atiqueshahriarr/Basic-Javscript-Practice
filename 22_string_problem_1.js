/*** 

Count how many times a string has the letter

*/

let str = "Rashmi is my antagonist"
let aCount = 0;
for (let letter of str) {
    if (letter === 'a') {
        aCount += 1;
    }
}
console.log(aCount);