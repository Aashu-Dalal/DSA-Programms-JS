let prompt = require('prompt-sync')()
let n1 = Number(prompt("Enter First number: "))
let n2 = Number(prompt("Enter Second number: "))
var fact1 = []
var fact2 = []
for(let i = 1; i<= Math.floor(n1/2); i++){
    if(n1%i === 0){
        fact1.push(i)
        
    }
}
fact1.push(n1)
for(let i = 1; i<= Math.floor(n2/2); i++){
    if(n2%i === 0){
        fact2.push(i)
        
    }
}
fact2.push(n2)

let common = fact1.filter(value => fact2.includes(value))
gcd = Math.max(...common)

console.log(gcd)