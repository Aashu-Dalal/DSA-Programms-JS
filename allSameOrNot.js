let num = 77777
let input = num.toString()
let allSame = true
for(let i = 0; i<=input.length; i++){
    if(input[i] != input[i+1]){
        allSame = false
        break
    }
}  
if(allSame == true ){
    console.log("true")
}
else{
    console.log("false")
}
