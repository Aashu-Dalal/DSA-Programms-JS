function maxProduct(arr) {
    if (arr.length < 2) {
        return null; // Not enough numbers
    }

    let max1 = -Infinity, max2 = -Infinity; // Two largest
    let min1 = Infinity, min2 = Infinity;   // Two smallest (for negative numbers)

    for (let num of arr) {
        // Update two largest numbers
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }

        // Update two smallest numbers
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    // Maximum product can be either from two largest or two smallest numbers
    return Math.max(max1 * max2, min1 * min2);
}

// Example
let arr = [5, -10, -6, 9, 4];
console.log(maxProduct(arr)); // Output: 60
