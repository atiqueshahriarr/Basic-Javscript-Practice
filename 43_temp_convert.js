/*

Write a function to convert temperature from Celsius to Fahrenheit.

*/

function celsiusToFahrenheit(cel) {
    return ((cel * 9) + 160) / 5;
}
const celsius = 40;
console.log(celsius + "c =", celsiusToFahrenheit(celsius) + "f");
console.log(21 + "c =", celsiusToFahrenheit(21) + "f");
