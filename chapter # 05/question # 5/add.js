// question 5
// Write a script to display multiplication table of any
// number in your browser. 

let num = parseInt(prompt("Enter a number to display its  table"));
document.write("<h2> Table of " + num + "</h2>");

for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}
