//question 2
// What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2; 
b = 1;
document.write("<br> a is: "+a);
document.write("<br> b is: "+b);
var result = --a - --b + ++b + b--;
document.write (" <br> The result is:" +result);

// --a; ... it decrement the value of a before performing a task so,the value of a becomes 1.

// --a - --b; .....--a has already been explained a=1, --b decrement the value of b before performing a task so,the value of b becomes 0.the expression becomes 1-0,
//the result of this expression is 1

// --a - --b + ++b; ..... --a - --b has already been evaluated above --a- --b=1  and ++b increment the value before adding ina eqaution so the value of b becomes 1 the result will be 1 + 1 =2.

// --a - --b + ++b + b--;
// --a - --b + ++b is 2 and b-- evaluates the value of b and then decrements it by 1.
// The value of b is 1 before the decrement.
// The expression becomes 2 + 1.
// The result of this expression is 3.