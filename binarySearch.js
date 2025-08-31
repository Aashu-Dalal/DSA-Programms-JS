function binary(num, arr) {
  let array = [...arr].sort((a, b) => a - b);
  left = 0;
  right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] == num) return mid;
    else if(num < array[mid]) {
      right = mid-1
    }
    else{
        left = mid +1
    }
  }
  return -1
}

let arr = [1,3,11,12,45]
num = 1

result = binary(num,arr)
if(result !== -1){
    console.log(`Element found at index ${result} `)
}
else{
    console.log("Not Found")
}