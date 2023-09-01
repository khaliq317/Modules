import inquirer from "inquirer";
let input = await inquirer.prompt([
    {
        name: "Num1",
        type: "number",
        message: "Please enter your first Number",
    },
    {
        name: "Num2",
        type: "number",
        message: "Please enter your second Number",
    },
    {
        name: "Operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        message: "Select Operator",
    }
]);
if (input.Operation === "Addition") {
    console.log(`Your answer is: ${input.Num1 + input.Num2}`);
}
else if (input.Operation === "Subtraction") {
    console.log(`Your answer is: ${input.Num1 - input.Num2}`);
}
else if (input.Operation === "Multiplication") {
    console.log(`Your answer is: ${input.Num1 * input.Num2}`);
}
else if (input.Operation === "Division") {
    console.log(`Your answer is: ${input.Num1 / input.Num2}`);
}
else {
    console.log("Inavalid Input");
}
