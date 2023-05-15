// question 11
// The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”

let currentYear = 2023;
let birthYear = 1990;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("<h1> Age Calculator </h1>");
document.write("<br> Current Year = " +currentYear );
document.write("<br> Birth Year = " +birthYear);
document.write("<br> Age 1 = " +age1);
document.write("<br> Age 2 = " +age2);
document.write("<br> They are either " + age1 + " or " + age2 + " years old");


// const age1 = currentYear - birthYear;
// const age2 = age1 - 1;
// console.log(`They are either ${age1} or ${age2} years old.`);
