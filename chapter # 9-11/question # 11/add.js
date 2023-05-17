// question 11
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let number1 = parseInt(prompt("Enter first number"));
let number2 = parseInt(prompt("Enter second number"));
let operation = parseInt(prompt("Enter operation (+, -, *, /, %)"));
let result;
if (operation == "+" ) {
    result = (number1 + number2);
    alert ("Result is: " + result);
    } 
    else if (operation == "-") {
        result = (number1 - number2);
        alert ("Result is: " + result);
        } 
        else if (operation == "*") {
            result = (number1 * number2);
            alert ("Result is: " + result);
            }
            else if (operation == "/") {
                result = (number1 / number2);
                alert ("Result is: " + result);
                } 
                else if (operation == "%") {
                    result = (number1 % number2);
                    alert ("Result is: " + result);
                    }
                     else {
                        alert ("Invalid Operation");
                        }