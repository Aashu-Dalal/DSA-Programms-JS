function LinearSearch(num , arr){
    for(let i = 0; i<arr.length ; i++){
        if(arr[i] === num) return i
    }
    return -1
}
let arr = [5,4,3,8,5,9,6]
let num = 6
let result = LinearSearch(num , arr)

if(result !== -1){
    console.log(`Element found at ${result} index`)
}
else{
    console.log("Element not found!")
}
