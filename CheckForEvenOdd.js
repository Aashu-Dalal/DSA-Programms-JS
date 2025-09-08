let prompt = require("prompt-sync")();

function checkEvenOdd(value) {
  let num = Number(value);

  if (isNaN(num)) {
    return "Invalid input! Please enter a number.";
  }

  if (!Number.isInteger(num)) {
    return "The number is a decimal, not strictly even or odd.";
  }

  if (num % 2 === 0) {
    return `${num} is Even.`;
  } else {
    return `${num} is Odd.`;
  }
}

let input = prompt("Enter a number: ");
console.log(checkEvenOdd(input));
