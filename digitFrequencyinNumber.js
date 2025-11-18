function countDigit(num, target) {
    if (num === 0) return 0; // base case

    let lastDigit = num % 10;
    let count = (lastDigit === target) ? 1 : 0;

    return count + countDigit(Math.floor(num / 10), target);
}

// Example
console.log(countDigit(76745677, 7)); // 4
console.log(countDigit(123456, 5));   // 1
