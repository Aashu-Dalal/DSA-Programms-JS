let arr = [1, 2, 4, 5, 6];
let n = 6;  // total numbers should be 1 to 6

let xorAll = 0;   // XOR of 1 to n
let xorArr = 0;   // XOR of array elements

// XOR of numbers from 1 to n
for (let i = 1; i <= n; i++) {
    xorAll ^= i;
}

// XOR of given array elements
for (let i = 0; i < arr.length; i++) {
    xorArr ^= arr[i];
}

// Missing number
let missing = xorAll ^ xorArr;

console.log("Missing number is:", missing);
