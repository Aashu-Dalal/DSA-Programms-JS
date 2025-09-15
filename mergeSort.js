function divide(arr , first,last){
    if(first>=last) return
    let mid = Math.floor((first+last)/2)
    divide(arr , first , mid)
    divide(arr , mid+1 , last)
    conquor(arr , first , mid , last)
}
function conquor(arr, first, mid, last) {
  let temp = new Array(last - first + 1);
  let i = first;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= last) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else temp[k++] = arr[j++];
  }
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= last) {
    temp[k++] = arr[j++];
  }
  let p = 0;
  let t = first;
  while(p<temp.length){
    arr[t++] = temp[p++]
  }
}

let arr = [1,5,4,7,6,2]
divide(arr , 0 , arr.length-1)
console.log(arr)