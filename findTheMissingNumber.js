let arr = [2,4,5,6]
let n = arr.length-1
for(let i =0 ; i<n;i++){
    if(arr[i] != arr[i+1]-1){
        console.log(arr[i]+1)
    }
}
