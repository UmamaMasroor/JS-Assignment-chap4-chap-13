// question 6
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// C = (F - 32) * 5/9
// F = (C * 9/5) + 32

// Fahrenheit to Celsius conversion
let Temp1 = 70;
let celsiusTemp1 = (Temp1 - 32) * 5/9;
document.write(Temp1 + "°F is " + celsiusTemp1 + "°C");

// Celsius to Fahrenheit conversion
let celsiusTemp2 = 25;
let Temp2 = (celsiusTemp2 * 9/5) + 32;
document.write("<br>" +celsiusTemp2 + "°C is " + Temp2 + "°F");


