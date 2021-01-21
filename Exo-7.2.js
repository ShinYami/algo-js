const readlineSync = require("readline-sync");

var n = readlineSync.question("Please, write an integer number : ");

var fib = function (n) {
    if (n === 1){
        return 0;
    }
    if (n === 2){
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(n));