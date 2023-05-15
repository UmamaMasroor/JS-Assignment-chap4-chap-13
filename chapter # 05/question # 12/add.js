// question 12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

let radius = 10;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
document.write("<h1> The Geometrizer </h1>")
document.write("<br> The radius of a circle is : " + radius);
document.write("<br> The circumference is : " + circumference);
document.write("<br> The area is : " + area);
