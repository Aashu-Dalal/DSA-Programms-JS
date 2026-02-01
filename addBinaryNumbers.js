function decimalToBinary(num){
    if(num === 0) return "0"

    let ans = ""
    while(num > 0){
        let rem = num % 2
        ans = rem + ans
        num = Math.floor(num / 2)
    }
    return ans
}

function addTwoDecimalsInBinary(a, b){

    let bin1 = decimalToBinary(a)
    let bin2 = decimalToBinary(b)

    let sumInDecimal = a + b
    let sumInBinary = decimalToBinary(sumInDecimal)

    console.log("First number in binary:", bin1)
    console.log("Second number in binary:", bin2)
    console.log("Sum in binary:", sumInBinary)
}

addTwoDecimalsInBinary(5, 3)
