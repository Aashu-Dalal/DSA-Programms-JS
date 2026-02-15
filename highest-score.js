let arr =[50,73,80,93]
let high = arr[0]
for(i=1; i<arr.length; i++){
    if(arr[i]>high){
        high = arr[i]
    }
}
console.log("The highest marks scored by the student is",high)
