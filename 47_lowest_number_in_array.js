/*

Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

*/

function checkLowest(heights) {
    let min = heights[0];
    for (const item of heights) {
        if (item < min) {
            min = item;
        }
    }
    return min;
}


const heights2 = [167, 190, 120, 165, 137];
console.log("Lowest number is", checkLowest(heights2));