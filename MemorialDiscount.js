let prompt = require('prompt-sync')();
let n = Number(prompt("Enter the cost: "));

function discount(n) {
    if (n > 100) {
        return n * 0.9;   
    }
    return n; 
}

if (isNaN(n) || n <= 0) {
    console.log(" Please enter a valid positive number!");
} else {
    console.log(` The cost after applying Memorial Day Discount is: ${discount(n)}`);
}
