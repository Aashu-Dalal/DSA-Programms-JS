// str = "ashu"
// rev = ""

// for(let i = str.length - 1 ; i>= 0; i--){
//     rev += str[i];
// }
// console.log(rev)

// more efficient way

let prompt = require('prompt-sync')()

let str = prompt("Enter a String: ")
i = 0; 
j = str.length - 1;

while(i<j){
    let temp = str[i]
    str[i] = str[j]
    str[j] = temp
}

console.log(str)


