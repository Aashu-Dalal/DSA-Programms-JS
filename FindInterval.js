let arr = [1, 4, 8,7, 9, 3];

let small = arr[0];
let large = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < small) {
    small = arr[i];
  }
  
  else if (arr[i] > large) {
    large = arr[i];
  }
}

console.log(`Smallest value: ${small}`);
console.log(`Largest value: ${large}`);
console.log(`Difference (large - small): ${large - small}`);
