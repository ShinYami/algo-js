const readlineSync = require("readline-sync");

number = Math.floor(Math.random() * 100) + 1 ; 


let userNumber = readlineSync.question ("Guess a number between 1 and 100 ");

while ((Number(userNumber)) != number) {

    if (((Number(userNumber)) < number)) {
        console.log("Too low");
        userNumber = readlineSync.question("Try again ! ");
    } else {
        console.log("Too high");
        userNumber = readlineSync.question("Try again ! ");
    }
}

console.log ("Congratz !");