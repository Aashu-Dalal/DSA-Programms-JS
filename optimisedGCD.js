// finding gcd using recursion

let prompt = require('prompt-sync')()
let num1 = Number(prompt("Enter first Number: "))
let num2 = Number(prompt("Enter second Number: "))

function gcd(num1 , num2){
    if(num2 == 0 ) return num1
    return gcd(num2 , num1%num2)
}

console.log(gcd(num1,num2))