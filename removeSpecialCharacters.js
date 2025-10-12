let str = "He@llo! Wo#rld$% 123";
let cleanStr = str.replace(/[^a-zA-Z0-9 ]/g, '');

console.log("Original String:", str);
console.log("After Removing Special Characters:", cleanStr);
