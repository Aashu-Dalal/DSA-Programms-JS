function isWithinRange(num, lowerLimit, upperLimit) {
    if (num >= lowerLimit && num <= upperLimit) {
        return "Yes";
    }
    return "No";
}

console.log(isWithinRange(10, 1, 10)); // Yes
console.log(isWithinRange(0, 1, 10));  // No
