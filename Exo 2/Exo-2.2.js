const readlineSync = require("readline-sync");

let min = new Number(readlineSync.question("Give me a small number"));
let max = new Number(readlineSync.question("Give me a greater number"));

if (min>=max) {
    console.log("Dude, how minimum can be greater than maximum? U kidding me?");
}   else {
    console.log("Thanks");
    let current = new Number(readlineSync.question("Give me your last number between your last two numbers"));
    if ((current>=max) || (current<=min)) {
    console.log("Try again");
  } else {
    console.log("GoodJob"); 
  }
}

