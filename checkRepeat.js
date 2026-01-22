function checkRepeat(str){
    let words = str.split(" ")
    let repeat= true
    for(let i = 0; i<words.length; i++){
        for(let j=i+1; j<words.length; j++){
            if(words[i] === words[j]){
                console.log("Repeat ")
                return 
            }
        }
    }
    
        console.log("No Repeat")
    
}
checkRepeat("hello, kya haal")
