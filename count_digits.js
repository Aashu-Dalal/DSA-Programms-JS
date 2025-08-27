let prompt = require('prompt-sync')()
let num = Number(prompt("Enter a number: "))

let count = 0;
if(num == 0){
    count =1
}
else{
    num = Math.abs(num)
    while(num>0){
    num = Math.floor(num/10)
    count++
}
}
console.log(count)