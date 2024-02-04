/*

Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

*/

const laptopPrice = 35000, tabletPrice = 15000, mobilePrice = 20000;

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity) {

    let totalPrice = (laptopPrice * laptopQuantity) + (tabletPrice * tabletQuantity) + (mobilePrice * mobileQuantity);
    return totalPrice;

}

console.log("Total required money:", calculateElectronicsBudget(2, 2, 1));
