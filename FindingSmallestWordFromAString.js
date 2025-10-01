function shortestWord(str) {
    let words = str.split(" ");
    
    let shortest = words[0];
    
    for (let word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    
    return shortest;
}
let str = "I love programming languages";
console.log(shortestWord(str)); 
