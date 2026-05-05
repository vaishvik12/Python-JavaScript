let toaster = 18.50;
let shirt = 7.50 * 2;

let totalCost = toaster + shirt;
let tax1 = 0.1;
let tax2 = 0.2;
let taxAmount1 = totalCost * tax1;
let taxAmount2 = totalCost * tax2;

console.log("Total Cost: $" + totalCost);
console.log("Tax to be payed at 10%: $" + taxAmount1);
console.log("Tax to be payed at 20%: $" + taxAmount2.toFixed(2));


