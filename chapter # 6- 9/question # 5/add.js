// question 5
// Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let subject1 = prompt("Enter 1st subject name.");
let subject2 = prompt("Enter 2nd subject name.");
let subject3 = prompt("Enter 3rd subject name.");
let total = 100;

let marks1 = parseInt(prompt("Enter your obtained marks of " + subject1));
let marks2 = parseInt(prompt("Enter your obtained marks of " + subject2));
let marks3 = parseInt(prompt("Enter your obtained marks of " + subject3));
let total2 = marks1 + marks2 + marks3;

let percentage = (total2 * 100) / (total * 3);

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + total + "</td><td>" + marks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + total + "</td><td>" + marks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + total + "</td><td>" + marks3 + "</td></tr>");
document.write("<tr><td><strong>Total</strong></td><td><strong>" + total * 3 + "</strong></td><td><strong>" + total2 + "</strong></td></tr>");
document.write("<tr><td><strong>Percentage</strong></td><td><strong>" + percentage + "%</strong></td><td></td></tr>");
document.write("</table>");

