const readlineSync = require("readline-sync");

function rand10(min, max) {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand(n) {
    let multi = [];
    for (let i = 0; i < n; i++) {
        multi.push(rand10());
    }
    return multi;
}

let number = new Number(readlineSync.question("how many numbers do you want between 1 and 10 ? "));

console.log("Here is random numbers: ");
for (e of multiRand(number)) console.log(e);