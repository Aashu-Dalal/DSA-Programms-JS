let num = 88373;
let newNum = num.toString();
let count = 0;

while (newNum.length > 1) {
    let sum = 0;
    for (let i = 0; i < newNum.length; i++) {
        sum += Number(newNum[i]);
    }
    console.log(`Step ${count + 1}: ${newNum} → ${sum}`);
    newNum = sum.toString();
    count++;
}

console.log(`Total steps to reach single digit: ${count}`);
console.log(`Final single-digit number: ${newNum}`);
