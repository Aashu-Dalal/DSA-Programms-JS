// Maximum Subarray Sum (Kadane's Algorithm without Math.max)

let arr = [1, 2, -3, 4, -5, -3, 2, 6, 4, 8];
let currentSum = arr[0];
let maxSum = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (currentSum + arr[i] > arr[i]) {
    currentSum = currentSum + arr[i]; // extend previous subarray
  } else {
    currentSum = arr[i]; // start new subarray from current element
  }
  if (currentSum > maxSum) {
    maxSum = currentSum;
  }
}
console.log("Maximum subarray sum =", maxSum);
