let str = "HelloString1234"
function stringSorter(str){
    let newStr = ""
    for(let i= 0; i<str.length; i++){
        let ch = str[i]
        if(ch === ch.toLowerCase() && ch!== ch.toUpperCase()){
            newStr += ch
        }
        
    }
    for(let i= 0; i<str.length; i++){
        let ch = str[i]
        if(ch === ch.toUpperCase() && ch !== ch.toLowerCase()){
            newStr += ch
        }
        
    }
    for(let i= 0; i<str.length; i++){
        let ch = str[i]
        if(!isNaN(ch)){
            newStr += ch
        }
         
    }
        
    return newStr
}
console.log(ginortS(str))
