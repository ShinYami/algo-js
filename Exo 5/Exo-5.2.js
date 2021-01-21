const readlineSync = require("readline-sync");

function askTvSerie() {   
let TvSerie = {
    Name: "",
    Year: "",
    CastUser: [],
};

TvSerie.Name = readlineSync.question("Name of your favorite Serie?");
TvSerie.Year = Number(readlineSync.question("What's the production year ?"));

let actor = readlineSync.question("Actor in the serie (to quit, end sentence with /) : ");
do {
    TvSerie.CastUser.push({ actor });
    actor = readlineSync.question("Actor in the serie (to quit, end sentence with  /) : ");
} while (actor != "/");
return TvSerie;
}

function randomizeCast(tvSerie){

    let i = tvSerie.length;
    let temp;
    let index;

    // While there are elements in the array
    while (i > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * i);
        // Decrease i by 1
        i--;
        // And swap the last element with it
        temp = tvSerie[i];
        tvSerie[i] = tvSerie[index];
        tvSerie[index] = temp;
    }
    return TvSerie;
} 