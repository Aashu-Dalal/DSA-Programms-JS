function longestWord(sentence) {
    let words = sentence.trim().split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length === 0) continue;

        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return {
        word: longest,
        length: longest.length
    };
}

console.log(longestWord("   hello   nice   to   meet   you   "));
