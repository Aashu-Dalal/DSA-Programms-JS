let prompt = require('prompt-sync')()
let n = Number(prompt("Enter a number: "))
function fibonacci(n, first , second ){
    if(n==0) return
    let third = first + second
    console.log(third)
    fibonacci(n-1,second , third)
}
console.log(0)
console.log(1)

fibonacci(n-2,0,1)