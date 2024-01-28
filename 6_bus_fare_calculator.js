/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 65;
var fare = 800;
if (age < 10) {
    fare = fare - (fare * 100 / 100);
    console.log("Fare: ", fare);
}
else if (age >= 10 && age < 60) {
    fare = fare - (fare * 50 / 100);
    console.log("Fare: ", fare);
}
else if (age >= 60) {
    fare = fare - (fare * 15 / 100);
    console.log("Fare: ", fare);
}
else{
    console.log("Fare: ", fare);
}