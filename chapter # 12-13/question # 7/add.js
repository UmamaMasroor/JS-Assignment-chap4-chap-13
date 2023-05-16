//question 7
// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let time = prompt("What time is it?");
time = 1900;
if (time >= 0 && time < 1200) {
  alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
  alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!");
} else if (time >= 2100 && time < 2359);{
  alert("Good night!");
}
            