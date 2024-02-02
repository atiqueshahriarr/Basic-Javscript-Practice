/*

Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/

function count_zero(str) {
    let count = 0;
    for (const num of str) {
        let n = parseInt(num);
        if (n === 0) {
            count++;
        }
    }
    return count;
}

console.log(count_zero('11000101010010'));



function count_zeros(str) {
    let count = 0;
    for (const num of str) {

        if (num === '0') {
            count++;
        }
    }
    return count;
}

console.log(count_zeros('11000101010010'));