let arr = [1,0,3,0,5,7,8,0]
let i = 0
let j = arr.length-1
while(i<=j){
    if(arr[j]==0){
        j--
    }
    if(arr[i] == 0){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j--
    }
    i++
}
console.log(arr)