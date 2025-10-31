function singleNumber(nums) {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    for (let num in count) {
        if (count[num] === 1) return Number(num);
    }
}

// Example usage:
console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
