let prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));
let n = num
let sum = 0;
if (num > 0) {
  while (num > 0) {
    rem = num % 10;
    fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact *= i;
    }
    sum += fact;
    num = Math.floor(num / 10);
  }
}
if(sum === n){
    console.log("The given number is a Strong Number!")
}
else{
console.log("The given number is not a Strong Number");
}