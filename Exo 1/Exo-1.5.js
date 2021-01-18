const readlineSync = require("readline-sync");

let number1 = readlineSync.question("Type a decimal number");

let number2 = readlineSync.question("Type another decimal number");

console.log(Math.trunc(number1)*number2);