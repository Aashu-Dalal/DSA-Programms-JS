function oddSum(arr){
    let sum = 0
    for(let i=0; i<arr.length;i++){
        if(arr[i]%2 != 0){
            sum+= arr[i]
        }
    }
    return sum
}
console.log(oddSum([7,7,686,86,85]))
