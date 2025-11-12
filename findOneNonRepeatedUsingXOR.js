let arr = [2, 3, 5, 4, 5, 3, 4];
let unique = 0;

for (let i = 0; i < arr.length; i++) {
  unique ^= arr[i];
}

console.log("The single non-repeated element is:", unique);
