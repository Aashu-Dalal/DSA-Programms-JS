function countSmaller(arr){
    let result = []
    for(let i =0; i<arr.length; i++){
        let count = 0
        for(let j= i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                count++
            }
        }
        result.push(count)
    }
    return result 
}
let arr=[4,8,6,2,5]
console.log(countSmaller(arr))
