/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

//While Loop
let num = 61;
let evenArr = [], oddArr = [];
while (num <= 100) {
    if (num % 2 !== 0) {
        oddArr.push(num);
    }
    num++;
}

num = 78;
while (num <= 98) {
    if (num % 2 === 0) {
        evenArr.push(num);
    }
    num++;
}
console.log("Odd Number List");
console.log(oddArr);

console.log("Even Number List");
console.log(evenArr);




// For Loop
console.log("----------------------------------------------------------------------");


evenArr = [];
oddArr = [];
for (num = 61; num <= 100; num++) {
    if (num % 2 !== 0) {
        oddArr.push(num);
    }
    num++;
}


for (num = 78; num <= 98; num++) {
    if (num % 2 === 0) {
        evenArr.push(num);
    }

}
console.log("Odd Number List");
console.log(oddArr);

console.log("Even Number List");
console.log(evenArr);