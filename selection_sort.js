let prompt = require("prompt-sync")();
let arr = [3, 4, 1, 2, 5];

for (let i = 0; i < arr.length; i++) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  if (min !== i) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}
console.log(arr);
