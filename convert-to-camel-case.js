function toCamelCase(str) {

    let words = str.trim().split(" ");

    let result = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        if (words[i].length === 0) continue;

        result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return result;
}

console.log(toCamelCase("hello world program"));
