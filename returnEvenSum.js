function evenSum(num1,num2){
    let sum = num2 + num2
    if(sum%2 == 0){
        return sum
    }
    return sum+1
}
console.log(evenSum(3,5))
console.log(evenSum(2,4))
