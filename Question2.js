import inquirer from "inquirer";
console.log("Every Subject is assumed to have marks out of 100");
//Taking Input
const subjects = await inquirer.prompt([
    {
        name: "subject1",
        message: "Enter marks of subject-1: ",
        type: "number",
    },
    {
        name: "subject2",
        message: "Enter marks of subject-2: ",
        type: "number",
    },
    {
        name: "subject3",
        message: "Enter marks of subject-3: ",
        type: "number",
    },
]);
//Calculating the Average Grade by Multiplying with Average Percentage
let averagePercentage = (subjects.subject1 + subjects.subject2 + subjects.subject3) / 300;
let averageGrade = Math.floor(averagePercentage * 100);
//Conditions to Display Grades
if (averageGrade >= 90 && averageGrade <= 100) {
    console.log("A Grade");
}
else if (averageGrade >= 80 && averageGrade <= 89) {
    console.log("B Grade");
}
else if (averageGrade >= 70 && averageGrade <= 79) {
    console.log("C Grade");
}
else if (averageGrade >= 60 && averageGrade <= 69) {
    console.log("D Grade");
}
else if (averageGrade < 60) {
    console.log("Fail");
}
else {
    console.log("Please Enter Marks out of 100");
}
