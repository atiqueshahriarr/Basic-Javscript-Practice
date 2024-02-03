function checkDuplicate(dupArray) {
    const uniqueArray = [];
    for (const item of dupArray) {
        if (uniqueArray.includes(item) === true) {
            continue;
        }
        else {
            uniqueArray.push(item);
        }
    }
    return uniqueArray;

}

const dupArray = [1, 4, 3, 5, 2, 1, 5, 4, 8, 2, 1];
const uniqueArray = checkDuplicate(dupArray);
console.log(uniqueArray);