let prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number how many times you want to do sum: "));
let first = 0;
let second = 1;
console.log(first)
console.log(second)
for (let i = 2; i < num; i++) {
  let next = first + second;
  console.log(next)
  first = second;
  second = next;
}


