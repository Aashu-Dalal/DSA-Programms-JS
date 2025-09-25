let prompt = require('prompt-sync')();
let rate = Number(prompt("Enter your rating: "));

if (isNaN(rate) || rate <= 0) {
    console.log("Please enter a valid positive number!");
} else {
    console.log("*".repeat(rate));
}
