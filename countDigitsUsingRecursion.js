function countDigits(num) {
    if (num === 0) return 0;
    return 1 + countDigits(Math.floor(num / 10));
}

// Example
console.log(countDigits(12345)); // 5
console.log(countDigits(7));     // 1
