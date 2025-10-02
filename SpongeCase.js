let str = "Hello"
let newStr = ""

for (let i = 0; i<str.length; i++){
    if(i%2 == 0){
        newStr += str[i].toUpperCase()
    }
    else{
        newStr += str[i].toLowerCase()
    }
}
console.log(newStr)
