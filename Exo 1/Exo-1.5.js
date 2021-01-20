const readlineSync = require("readline-sync");

let number1 = parseInt(readlineSync.question("Type a decimal number"));

let number2 = readlineSync.question("Type another decimal number");


console.log(Math.ceil(number1)* Number(number2));