/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


//While Loop
let num = 81;
let evenSum = 0, oddSum = 0;
while (num <= 131) {
    if (num % 2 !== 0) {
        oddSum = oddSum + num;
    }
    num++;
}

num = 206;
while (num <= 311) {
    if (num % 2 === 0) {
        evenSum = evenSum + num;
    }
    num++;
}
console.log("Odd Number Sum: ", oddSum);

console.log("Even Number Sum: ", evenSum);



// For Loop
console.log("----------------------------------------------------------------------");


evenSum = 0, oddSum = 0;
for (num = 81; num <= 131; num++) {
    if (num % 2 !== 0) {
        oddSum = oddSum + num;
    }

}

for (num = 206; num <= 311; num++) {
    if (num % 2 === 0) {
        evenSum = evenSum + num;
    }

}
console.log("Odd Number Sum: ", oddSum);

console.log("Even Number Sum: ", evenSum);