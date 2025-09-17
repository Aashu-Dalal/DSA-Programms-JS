let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number: "))
function fact(n) {
    if (n<0) return "Enter number above 0"
    if (n === 0 || n === 1) return 1;
    return n * fact(n - 1);
}
let result = fact(n)
console.log(result); 
