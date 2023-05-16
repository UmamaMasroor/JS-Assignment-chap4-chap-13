// question 4
// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

let fuel = prompt("How much fuel is remaining in your car?");
if(fuel<0.25){
    document.write("Please refill the fuel in your car");
}
else{
    document.write("You have enough fuel in your car");
    }