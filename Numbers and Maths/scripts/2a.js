let soup = 10;
let soupQuantity = 1;
let burgers = 8;
let burgerQuantity = 3;
let icecream = 5;
let icecreamQuantity = 1;
let totalPeople = 3;

let costOfOrder = 0;

costOfOrder = soup * soupQuantity + burgers * burgerQuantity + icecream * icecreamQuantity;

console.log("Cost of order: $" + costOfOrder);
console.log("Each person has to pay $" + (costOfOrder/totalPeople));
