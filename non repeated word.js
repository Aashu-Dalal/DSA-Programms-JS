let str = "interview";
let charCount = {};

for (let ch of str) {
  charCount[ch] = (charCount[ch] || 0) + 1;
}

let result = null;
for (let ch of str) {
  if (charCount[ch] === 1) {
    result = ch;
    break;
  }
}

if (result) {
  console.log("First non-repeated character:", result);
} else {
  console.log("No non-repeated character found");
}
