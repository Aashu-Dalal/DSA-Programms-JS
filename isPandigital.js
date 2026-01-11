function isPandigital(num) {
    let str = num.toString()

    // condition 1: starting digit cannot be 0
    if (str[0] === '0') return false

    let set = new Set(str)

    // condition 2: must contain all digits 0–9
    for (let i = 0; i <= 9; i++) {
        if (!set.has(i.toString())) {
            return false
        }
    }
    return true
}

console.log(isPandigital(5234987610)) // true
console.log(isPandigital(9876543210)) // true
console.log(isPandigital(123456789))  // false
console.log(isPandigital(0987654321)) // false
