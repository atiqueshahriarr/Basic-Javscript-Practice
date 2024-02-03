/*

You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]
find: 5
output: 2

sample-input: numbers = [5,6,11,12,98, 5]
find: 25
output: 0

You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/


function countNumber(numbers, find) {
    let count = 0;
    for (const num of numbers) {
        if (num === find) {
            count++;
        }
    }
    return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
console.log(5, "is stay in", numbers, "is", countNumber(numbers, 5));

console.log(25, "is stay in", numbers, "is", countNumber(numbers, 25));

