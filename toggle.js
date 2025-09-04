let prompt = require('prompt-sync')()
let str = prompt("Enter a String: ")
result = ""

for(let i = 0; i<str.length; i++){
    let ch = str[i];
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
       ch = str[i].toLowerCase()
    }
    else if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
       ch = str[i].toUpperCase()
    }
    result += ch
}
console.log(result)
