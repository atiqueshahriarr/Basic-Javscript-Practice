/*** 

Count how many times a string has the letter a or A

*/

let str = "Rashmi is my antagonist And Also"
let aCount = 0, ACount = 0;

for (let letter of str) {
    if (letter === 'a') {
        aCount += 1;
    }
    else if (letter === 'A') {
        ACount += 1;
    }
}
console.log("a:", aCount, "A:", ACount);