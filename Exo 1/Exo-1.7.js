const readlineSync = require("readline-sync");

let var1 = readlineSync.question("What's your shoe size ?");

let var2 = readlineSync.question("What's your birth year ?");

let result = ((((Number(var1)*2))+5)*50) - ((Number(var2))) +1766;

console.log(result);







