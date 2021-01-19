const readlineSync = require("readline-sync");

function calcSurface(length, width) {
    return length * width ;
}

let length = new Number(readlineSync.question("Rectangle Length : "));
let width = new Number(readlineSync.question("Rectangle Width : "));
let surface = calcSurface(length, width);

console.log("The surface of the rectangle is " + surface);