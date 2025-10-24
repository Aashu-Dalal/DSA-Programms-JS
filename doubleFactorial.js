let prompt = require('prompt-sync')();
let num = Number(prompt("Enter a number: "));

if (isNaN(num)) {
    console.log("Please enter a valid number input");
} else {
    let product = 1;

    if (num % 2 === 0) {
        for (let i = 2; i <= num; i += 2) {
            product *= i;
        }
    } else {
        for (let i = 1; i <= num; i += 2) {
            product *= i;
        }
    }

    console.log("Product:", product);
}
