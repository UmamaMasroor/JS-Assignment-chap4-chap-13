// question 7
// Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables 
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// Define the prices and quantities of the items and shipping charges
// let priceItem1 = 500;
// let priceItem2 = 800;
// let qtyItem1 = 2;
// let qtyItem2 = 1;
// let shippingCharges = 100;

// // Calculate the total cost of the items
// let totalCostItems = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2);

// // Calculate the grand total including shipping charges
// let grandTotal = totalCostItems + shippingCharges;

// // Display the receipt in the browser
// document.write("<h2>Receipt</h2>");
// document.write("<p>Price of Item 1: " + priceItem1 + "</p>");
// document.write("<p>Price of Item 2: " + priceItem2 + "</p>");
// document.write("<p>Quantity of Item 1: " + qtyItem1 + "</p>");
// document.write("<p>Quantity of Item 2: " + qtyItem2 + "</p>");
// document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
// document.write("<hr>");
// document.write("<p>Total Cost of Items: " + totalCostItems + "</p>");
// document.write("<p>Grand Total (including Shipping Charges): " + grandTotal + "</p>");

let price1 = 600;
let price2 = 800;
let qty1 = 2;
let qty2 = 3;
let shipping = 100;
let total = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("<h2>Shopping Cart</h2>");
document.write("<br> Price of item 1 is " +price1);
document.write("<br> Quantity of item 1 is " +qty1);
document.write("<br> Price of item 2 is " +price2);
document.write("<br> Quantity of item 2 is " +price1);
document.write("<br> Shipping charges is " +shipping);
document.write("<br> <br> <br> Total cost of items is " +total);
