let arr = [95,3,8,1,3,4,12,89,54]
let largest = arr[0]
let seclarge = -Infinity

for(let i = 1; i<arr.length; i++){
    if(arr[i] > largest){
        seclarge = largest
        largest = arr[i]
    }
    else if(arr[i] < largest && arr[i] > seclarge){
        seclarge = arr[i]
    }
}
console.log(largest , seclarge)