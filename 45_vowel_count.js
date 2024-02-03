/*

Write a function to count the number of vowels in a string.

*/


function vowelsCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            count++;
        }
    }
    return count;
}

let str = "He is my antagonist and he lives in uk"
console.log("Number of total vowel:", vowelsCount(str));


