let prompt = require('prompt-sync')();
let input = prompt("Enter a string: ");

function toSnakeCase(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch === " ") {
            result.push("_");
        } else if (/[A-Z]/.test(ch)) {
            if (i > 0) result.push("_");  // add underscore before uppercase (not at start)
            result.push(ch.toLowerCase());
        } else {
            result.push(ch);
        }
    }

    return result.join("");
}

let newStr = toSnakeCase(input);
console.log(newStr);
