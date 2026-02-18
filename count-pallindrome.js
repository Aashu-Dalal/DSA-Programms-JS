function sameFirstLastWords(sentence){

    let words = sentence.trim().split(" ");
    let result = [];

    for(let i = 0; i < words.length; i++){

        if(words[i].length === 0) continue;

        let word = words[i];

        let first = word[0];
        let last  = word[word.length - 1];

        if(first === last){
            result.push(word);
        }
    }

    return {
        words: result,
        count: result.length
    };
}

let output = sameFirstLastWords("  level mom hello noon dad apple  ");

console.log("Words →", output.words);
console.log("Count →", output.count);
