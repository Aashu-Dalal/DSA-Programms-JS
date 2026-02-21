function countVowelStartWords(str) {
    let words = str.trim().split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {

        if (words[i] === "") continue;

        let firstChar = words[i][0].toLowerCase();

        if (
            firstChar === 'a' ||
            firstChar === 'e' ||
            firstChar === 'i' ||
            firstChar === 'o' ||
            firstChar === 'u'
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowelStartWords("  hello apple Orange umbrella  "));
