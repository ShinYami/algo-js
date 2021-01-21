const readlineSync = require("readline-sync");

const number = readlineSync.question('Please give me a number : ');

const answer = get_answer(Number(number));

console.log(answer);

function get_answer(number){
    let answer = [];
    for (let i = 2; i < number; ++i){
        if (number % i === 0) {
            answer.push(i);
        }
    }
    return answer;
}
