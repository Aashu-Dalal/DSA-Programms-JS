let prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
let isPrime = true;

if (isNaN(num)) {
  console.log("Enter a valid input");
} else if (num < 0) {
  console.log("Number must be above 0!");
} else if (num == 1) {
  console.log("1 is neither prime nor Composite");
}else {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log("Given number is Prime");
} else {
  console.log("Given number is not Prime");
}
