function pairSum (arr, target ){
    let pair = []
    for(let i =0; i<arr.length; i++){
        for(let j =i+1; j<arr.length; j++){
            if(arr[i]+ arr[j] == target){
                pair.push([arr[i],arr[j]])
            }
            
         }
    }
    return pair.length ? pair : "Array didn't have any pair sum"
}
let array = [2,4,1,5,6,8]
let target= 7
console.log(pairSum(array, target))
