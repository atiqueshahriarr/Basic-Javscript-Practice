/*

Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

*/

function checkLongestWord(str) {
    const arr = str.split(" ");
    let lenArr = [];
    for (const item of arr) {
        lenArr.push(item.length);
    }


    let max = lenArr[0], indx = -1;

    for (let i = 0; i < lenArr.length; i++) {
        if (lenArr[i] > max) {
            max = lenArr[i];
            indx = i;
        }
    }

    return arr[indx];
}

const str = "I am learning Programming to become a programmer";
console.log("Largest word:", checkLongestWord(str)); 
