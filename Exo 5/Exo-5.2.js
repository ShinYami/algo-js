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


function randomizeCast(TvSerie) {
    let tvCast = TvSerie.cast;
    return tvCast;
}

let TvSerie = askTvSerie();
console.log(JSON.stringify(TvSerie));
TvSerie = randomizeCast(TvSerie);
console.log(JSON.stringify(TvSerie));

//Need to fix it//