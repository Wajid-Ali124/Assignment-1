import inquirer from "inquirer";
//Taking Input
const temprature = await inquirer.prompt([
    {
        name: "celsius",
        message: "Enter Temprature in Celsius: ",
        type: "number",
    },
]);
//Converting to Farhenheit
let F = (9 / 5) * temprature.celsius + 32;
console.log(`The Farhenheit temperature is: ${F}`);
