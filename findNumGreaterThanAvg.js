let arr=[2,4,6,8,10]
let sum = 0
for(let i =0; i<arr.length;i++){
    sum+=arr[i]
}
let avg = sum/arr.length
let newArray= []
for(let i= 0; i<arr.length; i++){
    if(arr[i]>avg){
        newArray.push(arr[i])
    }
}
console.log(newArray)
