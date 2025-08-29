let arr = [1,2,8,4,5]
let isSort = true;
for(let i = 0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
        isSort = false
        break
    }
}
if(isSort){
    console.log("The given array is sorted")
}
else{
    console.log("the array is not sorted")
}