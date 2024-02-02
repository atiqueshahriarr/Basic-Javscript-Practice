/*

Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/

function make_avg(arr) {
    const len = arr.length;
    let sum = 0;
    for (let num of arr) {
        sum = sum + num;
    }
    return (sum / len).toFixed(2);
}

console.log(make_avg([4, 2, 6, 8]));
console.log(make_avg([2, 6, 3, 4, 6, 2, 7]));