const prompt = require('prompt-sync')();


let n = Number(prompt("Enter the number of terms you want: "));

if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive number.");
    return;
}

let tribonacciSeries = [0, 1, 1];


if (n === 1) {
    tribonacciSeries = [0];
} else if (n === 2) {
    tribonacciSeries = [0, 1];
} else {

    let first = 0;
    let second = 1;
    let third = 1;

    
    for (let i = 3; i < n; i++) {
         let next = first + second + third;
        
        tribonacciSeries.push(next);

        
        first = second;
        second = third;
        third = next;
    }
}

console.log(`Tribonacci Series (first ${n} terms):`);
console.log(tribonacciSeries.join(', '));
