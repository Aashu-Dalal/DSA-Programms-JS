function sumOfSquares(n){
    let sum = 0
    for (let i=1; i<=n; i++){
        sum+=i**2
    }
    
    return sum
}
console.log(sumOfSquares(5))
