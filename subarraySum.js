let arr = [5,4,6,2]
let newArray = []
for(let i = 0; i<arr.length; i++){
    let j = arr[i] * (i+1) * (arr.length-i)
    newArray.push(j)
}
let sum = 0
for(let i= 0; i<newArray.length; i++){
    sum+= newArray[i]
}
console.log(sum)
