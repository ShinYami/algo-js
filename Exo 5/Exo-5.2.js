const readlineSync = require("readline-sync");

let series = askTvSerie();
console.log(series.casters);

console.log(randomizeCast(series.casters));

function askTvSerie() {
    let tvSeries = new Object();

    // series.name = readlineSync.question('The name of the series : ');
    // series.age = readlineSync.question('The years of the series : ');
    series.name = "room";
    series.age = 1400;
    series.casters= new Array();

    let caster = readlineSync.question('The caster (enter / to quit): ');
    do {
        series.casters.push(caster);
        caster = readlineSync.question('The caster (enter / to quit): ');
    }while (caster != "/");
    return series;
}

function randomizeCast(tvSerie){
    return tvSerie.sort(() => Math.random() - 0.5);
}

//need to check/fix //