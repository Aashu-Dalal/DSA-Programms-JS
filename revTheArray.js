let arr = [2,5,83,98,21,3]
let i = 0 , j = arr.length-1;
while(i<j){
    [arr[i] , arr[j]] = [arr[j] , arr[i]]
    i++;
    j--
}
console.log(arr)