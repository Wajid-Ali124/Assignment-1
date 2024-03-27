import inquirer from "inquirer";

//Taking Input
const electricity = await inquirer.prompt([
  {
    name: "units",
    message: "Enter Electricity Units: ",
    type: "number",
  },
]);

let totalBill: number = 0;

//Conditions for Bill Calculation
if (electricity.units <= 100) {
  totalBill += 0.1 * electricity.units;
} else if (electricity.units > 100 && electricity.units <= 300) {
  totalBill += 0.1 * 100 + (electricity.units - 100) * 0.15;
} else {
  totalBill += 100 * 0.1 + 200 * 0.15 + (electricity.units - 300) * 0.2;
}

console.log("Your total bill is: " + totalBill + "$");
