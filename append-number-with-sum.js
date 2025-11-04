function appendNumbers(num1, num2) {
    let sum = num1 + num2;
    let result = "" + num1 + num2 + sum; 
    return parseInt(result);
}

console.log(appendNumbers(10, 15)); // Output: 101525
console.log(appendNumbers(2, 3));   // Output: 235
