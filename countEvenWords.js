function countEvenWords(str){
    let newStr = str.trim()
    let words = newStr.split(" ")
    let evenWords = []

    for(let i=0; i<words.length; i++){

        if(words[i].length === 0){
            continue
        }

        if(words[i].length % 2 === 0){
            evenWords.push(words[i])
        }
    }

    return {
        count: evenWords.length,
        words: evenWords
    }
}

console.log(countEvenWords("    hello nice to meet you    "))
