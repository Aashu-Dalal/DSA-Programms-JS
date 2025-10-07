let str ="Helloji"
function repeatVowels(str){
    let newStr=""
    for(let i=0; i<str.length; i++){
        if(str[i]=="a"|| str[i] =="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
            newStr += str[i] + str[i]
        }
        else{
            newStr += str[i]
        }
    }
    return newStr
}
console.log(repeatVowels(str))
