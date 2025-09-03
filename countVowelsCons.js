let prompt = require('prompt-sync')()
let str = prompt("Enter a string: ")
Vowels = 0 , consonants = 0;
for(let i = 0; i<str.length; i++){ 
    let ch = str[i].toLowerCase()
    if(ch >= 'a' && ch <='z' ){
        if("aeiou".includes(ch)){
            Vowels++
        }
        else consonants++
    }
}
console.log(`The String contains ${Vowels} vowels and ${consonants} consonants`)