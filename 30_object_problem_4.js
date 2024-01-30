/*

Count the number of properties.

*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let prop = Object.keys(student);
console.log(prop.length);

let count=0;
for (let p in student){
    console.log(p);
    count++;
}

console.log(count)