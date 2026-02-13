function newWord(str){
    if(str.length<5){
        return str
    }
    let word = str[0]+str[1]+str[str.length-2]+str[str.length-1]
    return word
}
console.log(newWord("Cycling"))
