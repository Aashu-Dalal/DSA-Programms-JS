function isPrime(num){
    if (num <= 1) return false

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

function checkFactorial(num){
    let factorial = 1
    let i = 1

    while(factorial < num){
        i++
        factorial *= i
    }
    return factorial === num
}

function checkNumber(num){
    if (isPrime(num) && checkFactorial(num + 1)) {
        console.log("true")
    } else {
        console.log("false")
    }
}

checkNumber(23)
checkNumber(11)
checkNumber(5)
