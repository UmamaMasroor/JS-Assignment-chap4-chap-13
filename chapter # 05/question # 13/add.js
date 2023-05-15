// question 13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

let favSnack = "Ice-Cream";
let age = 15;
let maxAge = 65;
let amountSnack = 6;
let estimatedAmount = (maxAge - age) * 365 * amountSnack;;

document.write("<h2> The Lifetime Supply Calculator </h2>");
document.write("You will need " +estimatedAmount+ " snacks to last you until the ripe old age of " +maxAge);


