let num = 8
let isPower = true

while (num > 1) {
    if (num % 2 !== 0) {
        isPower = false
        break
    }
    num = num / 2
}

console.log(isPower)
