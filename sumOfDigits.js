let prompt = require('prompt-sync')()
let num = Number(prompt("Enter a digit you want to find their individual sum: "))

num = Math.abs(num)

function sumOfDigit(num){
    if(num === 0) return 0
    return (num%10) + sumOfDigit(Math.floor(num/10))
}
console.log(sumOfDigit(num))