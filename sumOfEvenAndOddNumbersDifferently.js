let num = 6746
let evenSum = 0
let oddSum= 0
while(num>0){
    let digit = Math.floor(num%10)
    if(digit%2 == 0){
        evenSum += digit
    }
    else{
        oddSum+= digit
    }
    num = Math.floor(num/10)
}
console.log("Sum of even numbers only is:", evenSum)
console.log("Sum of odd numbers only is:", oddSum)
