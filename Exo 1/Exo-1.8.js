const readlineSync = require("readline-sync");

let count = 3;

let question1 = readlineSync.question("What's your name ?");

console.log("There are "+--count+" questions left");

let question2 = readlineSync.question("What's your favorite food ?");

console.log("There is "+--count+" questions left");

let question3 = readlineSync.question("What's your favorite city ?");

console.log(question1+ " (hell, what a stupid name) loves to eat disgusting " +question2+ " in the awful city of " +question3);

