const readlineSync = require("readline-sync");

let number1 = readlineSync.question("Type in an integer");

let number2 = readlineSync.question("Type another one");

let result = (Number(number1))%(Number(number2));

console.log(result);

