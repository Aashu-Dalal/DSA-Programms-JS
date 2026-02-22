function factor(num){

    let factors = []
    let i = 2

    let numLength = String(num).length

    while(num > 1){
        if(num % i === 0){
            factors.push(i)
            num = num / i
        } else{
            i++
        }
    }

    let factorDigitCount = 0
    for(let f of factors){
        factorDigitCount += String(f).length
    }

    return numLength === factorDigitCount
}

console.log(factor(12))
console.log(factor(6))
console.log(factor(15))
