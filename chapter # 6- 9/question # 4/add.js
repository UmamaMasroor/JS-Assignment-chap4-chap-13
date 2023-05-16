// question 4

//  Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// let number = prompt("Enter a number of your choice.")

function displayMultiplicationTable() {
 var number = parseInt(document.getElementById("numberInput").value);

    if (isNaN(number)) {
      number = 5; // Set default number to 5
    }
    
    var table = "<h2>Multiplication Table of " + number + "</h2>";
    table += "<table>";
    for (var i = 1; i <= 10; i++) {
      table += "<tr><td>" + number + " x " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
    }
    table += "</table>";

    document.getElementById("multiplicationTable").innerHTML = table;
  }