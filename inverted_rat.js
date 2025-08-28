// for inverted RAT of numbers
const prompt = require("prompt-sync")()

var a = (prompt("enter a number: "))
for(let i = 1; i <= a; i++){
    for(let j = a; j >= i; j--){
        process.stdout.write("* ")
    }
    console.log()
}