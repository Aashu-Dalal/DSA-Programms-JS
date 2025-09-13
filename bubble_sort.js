let prompt = require('prompt-sync')()
let arr = [42, 7, 19, 73, 4, 56, 88, 12, 33, 5];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp
    }
  }
}
console.log(arr)