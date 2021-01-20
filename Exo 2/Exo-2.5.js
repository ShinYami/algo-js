const readlineSync = require("readline-sync");

let favNumber = readlineSync.question("What's your favorite number ?");

while (favNumber!="42") {
    favNumber = readlineSync.question("Wait, are you sure ? What's your favorite number ?");
} 
    console.log("Congratz!");
