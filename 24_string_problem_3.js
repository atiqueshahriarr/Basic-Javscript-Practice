/*

Check whether a string contains all the vowels a, e, i, o, u

*/


let str = "Rashme is my antagonist and she lives in uk"
let aCount = 0, eCount = 0, iCount = 0, oCount = 0, uCount = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        aCount = 1;
    }
    else if (str[i] === 'e') {
        eCount = 1;
    }
    else if (str[i] === 'i') {
        iCount = 1;
    }
    else if (str[i] === 'o') {
        oCount = 1;
    }
    else if (str[i] === 'u') {
        uCount = 1;
    }
}
let totalCount = aCount + eCount + iCount + oCount + uCount;

if (totalCount === 5) {
    console.log("Found all the vowels");
}
else {
    console.log("Not found all the vowels");
}