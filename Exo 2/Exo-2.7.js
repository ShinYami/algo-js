const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question("Enter a number: "));

let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += new Number(readlineSync.question(`Enter a new number ${i} : `));
}

console.log(`Total: ${sum} `);