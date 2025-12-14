let num = 52743;

let lastDigit = num % 10;
let temp = num;
let count = 0;
let digits = [];

while (temp > 0) {
    let digit = temp % 10;

    if (digit > lastDigit) {
        count++;
        digits.push(digit);
    }

    temp = Math.floor(temp / 10);
}

digits.reverse(); // to keep original order

console.log("Number:", num);
console.log("Last digit:", lastDigit);
console.log("Digits greater than last digit:", digits.join(", "));
console.log("Count:", count);
