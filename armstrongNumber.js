let prompt = require("prompt-sync")();
let n = (prompt("Enter a number: "));

power = n.length
sum = 0;
for(let i = 0; i<n.length; i++){
  sum = sum + (n[i]**power)
}
if(n == sum){
  console.log("The given number is Armstrong")
}
else{
  console.log("The given number is not an Armstrong Number!")
}