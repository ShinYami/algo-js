const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function average(arr) {
    let m = 0;
    for (e of arr) m += e;
    return m / arr.length;
}
function min(arr) {
    return Math.min(...arr);
}
function max(arr) {
    return Math.max(...arr);
}

let number = new Number(readlineSync.question("How many numbers do you want between 1 and 10 ? ")); 

let ran = Math.random(number);

console.log("Here is the list of generated random numbers:" + ran);
console.log("Here is average: " + average(ran));
console.log("Here is minimum: " + min(ran));
console.log("Here is maximum " + max(ran));

//not working, need to work again on it//