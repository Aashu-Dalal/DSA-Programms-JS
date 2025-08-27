// for right angle triangle (*)
const prompt = require("prompt-sync")()

var a = Number(prompt("enter a number: "))
for(let i = 1; i <= a; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

 