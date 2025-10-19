const prompt = require('prompt-sync')();

function isSastryNumber(num) {
    
    let concatNum = Number(String(num) + String(num + 1));

    let sqrt = Math.sqrt(concatNum);

    if (sqrt === Math.floor(sqrt)) {
        return `${num} is a Sastry number`;
    } else {
        return `${num} is not a Sastry number`;
    }
}

let num = Number(prompt("Enter a number: "));
console.log(isSastryNumber(num));
