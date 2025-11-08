function countOccurrences(arr) {
    let counts = {}

    for (let item of arr) {
        if (counts[item]) {
            counts[item] += 1
        } else {
            counts[item] = 1
        }
    }

    return counts
}

// Example
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
console.log(countOccurrences(fruits))
