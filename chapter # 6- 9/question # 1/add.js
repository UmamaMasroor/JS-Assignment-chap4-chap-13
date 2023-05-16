// question 1
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write("<h2> Results </h2>");
var a = prompt("Enter a number:");

document.write("The value of a is: " +a);
document.write("<br> <br> ....................................")
let operate = ++a;
document.write(" <br> <br> The value of ++a is: " +operate);
document.write("<br> Now the value of a is: " +a);
 let operate2 = a++;
 document.write(" <br> <br> The value of a++ is: " +operate2);
document.write("<br> Now the value of a is: " +a);

let operate3 = --a;
document.write(" <br> <br> The value of --a is: " +operate3);
document.write("<br> Now the value of a is: " +a);

let operate4 = a--;
document.write(" <br> <br> The value of a-- is: " +operate4);
document.write("<br> Now the value of a is: " +a);
