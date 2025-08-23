let prompt = require('prompt-sync')()
let num = prompt("Enter a number: ")
let rev = "" ;

for(i=num.length-1; i>=0; i--){
    rev += num[i]
}

console.log(rev)