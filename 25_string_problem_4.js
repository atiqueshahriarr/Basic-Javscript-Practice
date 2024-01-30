/*

If a given string has either x, replace x by y. if the given string has X, replace it by Y.

*/

let xStr = "Alex found perpleXing puzzle";
let xCount = 0, XCount = 0;


for (let i = 0; i < xStr.length; i++) {
    if (xStr[i] === 'x') {
        xCount += 1;
        xStr = xStr.replace(xStr[i], 'y');
    }
    else if (xStr[i] === 'X') {
        XCount += 1;
        xStr = xStr.replace(xStr[i], 'Y');
    }
}

console.log("Found x:", xCount, "& X:", XCount);
console.log("New string: ", xStr);