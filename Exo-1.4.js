const readlineSync = require("readline-sync");

let firstName = readlineSync.question('What is your first name ?');
let name = readlineSync.question('What is your name ?');
let city = readlineSync.question('What is your city ?');

console.log("Your name is " + firstName + " " + name + " and you live in " + city +".");