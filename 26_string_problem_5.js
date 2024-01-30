/*

Capitalize Every first Letter of each word in a String

*/

let str = "Alex found perpleXing puzzle";
let strArr = str.split(" ")
console.log(strArr);

for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].replace(strArr[i][0], strArr[i][0].toUpperCase());
}
strArr = strArr.join(" ");
console.log(strArr);