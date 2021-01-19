const readlineSync = require("readline-sync");

function calcDistance(ax, bx, ay, by) {
    let a = ax - bx;
    let b = ay - by;
    return Math.sqrt(a * a + b * b);
}

let ax = new Number(readlineSync.question("Give me the x of A: "));
let bx = new Number(readlineSync.question("Give me the x of B: "));
let ay = new Number(readlineSync.question("Give me the y of A: "));
let by = new Number(readlineSync.question("Give me the y of B: "));

console.log("Distance between A and B : " + calcDistance(ax, bx, ay, by));
