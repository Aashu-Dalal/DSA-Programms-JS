function replaceSmiley(str) {
    let result= ""
    for(let i = 0; i< str.length; i++){
        if(str[i]=== ')'){
            result+= '('
        }
        else result += str[i]
    }
    return result 
}
str = ':) :) :) all smiles here:)'
console.log(replaceSmiley(str))
