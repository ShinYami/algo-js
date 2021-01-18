const readlineSync = require("readline-sync");

let number1 = readlineSync.question("Type in an integer");

let number2 = readlineSync.question("Type another one");

console.log(number1%number2);