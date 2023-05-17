// question 6

let subject1 = parseInt(prompt("Enter marks obtained in subject 1:"));
let subject2 = parseInt(prompt("Enter marks obtained in subject 2:"));
let subject3 = parseInt(prompt("Enter marks obtained in subject 3:"));
let totalMarks = parseInt(prompt("Enter total marks:"));

let obtainedMarks = (subject1 + subject2) + subject3;
let percentage = (obtainedMarks * 100) / (totalMarks );

// Determining the grade based on percentage
let grade;
let remarks;
if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

// Displaying the result
document.write("<h1>Marks Sheet</h1>");
document.write("<p>Marks Obtained in Subject 1: " + subject1 + "</p>");
document.write("<p>Marks Obtained in Subject 2: " + subject2 + "</p>");
document.write("<p>Marks Obtained in Subject 3: " + subject3 + "</p>");
document.write("<p>Total Obtained Marks: " + obtainedMarks + "</p>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");

