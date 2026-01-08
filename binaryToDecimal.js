function binaryToDecimal(binary) {
    let decimal = 0
    let power = 0

    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += Number(binary[i]) * Math.pow(2, power)
        power++
    }

    return decimal
}

console.log(binaryToDecimal("110010"))
