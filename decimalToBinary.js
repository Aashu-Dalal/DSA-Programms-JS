function decimalToBinary(num){
    if (num == 0 ) return 0
    let ans = ""
    while(num>0){
        let remainder= num%2
        ans = remainder+ ans
        num = Math.floor(num/2)
    }
    return ans
}
console.log(decimalToBinary(50))
console.log(decimalToBinary(0))
