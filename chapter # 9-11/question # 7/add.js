// question 7
// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
  document.write("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1) {
  document.write("Close enough to the correct answer.");
} else {
  document.write("Sorry, incorrect guess.");
}
