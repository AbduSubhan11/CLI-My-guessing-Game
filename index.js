#! /usr/bin/env node
import inquirer from "inquirer";
const targetNumber = Math.floor(Math.random() * 20 + 1);
const answer = await inquirer.prompt([
    {
        name: "userNumber",
        type: "number",
        message: "Please guess a number between 1-20",
    },
]);
if (answer === targetNumber) {
    console.log(`Congratulations! you guessed the right number`);
}
else {
    console.log(`You guessed wrong number`);
}
