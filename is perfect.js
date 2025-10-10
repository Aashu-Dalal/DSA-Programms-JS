let prompt = require('prompt-sync')()
let num = prompt(Enter a number: ")
let sum = 0
for(let i=1; i<=Math.floor(num/2); i++){
    if(num%i == 0){
        sum += i
    }
}
if(num== sum){
    console.log("Perfect ")
}
else{
    console.log("Not")
}
