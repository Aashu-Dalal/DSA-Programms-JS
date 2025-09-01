let prompt = require('prompt-sync')()
let arr = [1,2,3,4,5,6]
let k = Number(prompt("Enter how many time you want to rotate: "))
k = k%arr.length;

for(let i = 0; i<k; i++){
    let temp = arr[0]
    for(let j = 0 ; j<arr.length-1; j++){
        arr[j] = arr[j+1]
    }
    arr[arr.length-1] = temp
}
console.log(arr)