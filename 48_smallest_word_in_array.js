/*

Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

*/


function checkSmallestWord(heights) {

    let min = heights[0].length;
    let indx = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i].length < min) {
            min = heights[i].length;
            indx = i;
        }
    }
    console.log("Smallest word index:", indx);
    return indx;

}


const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log("Smallest word:", heights2[checkSmallestWord(heights2)]);