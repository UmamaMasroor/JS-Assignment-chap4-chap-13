// question 9
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let us = 10;
let saudi = 25;
let us_to_pkr = 104.80;
let saudi_to_pkr = 28;
let total_pakistani_rupees = (us * us_to_pkr) + (saudi * saudi_to_pkr);
document.write( "<h2> Currency in PKR</h2>");
document.write( "<br> Total Currency in PKR: " +total_pakistani_rupees);
