function reverseWords(str) {
    return str
        .trim()
        .split(/\s+/)
        .reverse()
        .join(" ");
}

console.log(reverseWords("Learning with programiz"));
console.log(reverseWords("   Hello    World   "));
