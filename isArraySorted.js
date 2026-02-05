function sort(arr){
    let sortedArray = []
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            return false
        }
        
    }
    return true
}
let arr=[20,30,40,50]
console.log(sort(arr))
