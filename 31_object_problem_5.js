/*

Loop through an object and print the key-value pairs with their types

*/


let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let prop in myObject) {
    console.log("key:", prop, "|", "type: ", typeof myObject[prop]);
}