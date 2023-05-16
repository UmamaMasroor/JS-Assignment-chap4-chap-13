// question 1
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

let input = prompt("Enter a character:");
let asciiCode = input.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
  alert("The input is a number");
}
//  uppercase letter.....
else if (asciiCode >= 65 && asciiCode <= 90) {
 alert("The input is an uppercase letter");
}
//  lowercase letter.........
else if (asciiCode >= 97 && asciiCode <= 122) {
  alert("The input is a lowercase letter");
}
else {
  console.log("The input is neither a number nor a letter");
}
