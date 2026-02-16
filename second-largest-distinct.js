let arr = [5,4,8,2]

let largest = arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}

let second = -Infinity

for(let i=0;i<arr.length;i++){
    if(arr[i] !== largest && arr[i] > second){
        second = arr[i]
    }
}

console.log(second)
