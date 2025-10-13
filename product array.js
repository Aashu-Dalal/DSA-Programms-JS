function productArr(arr) {
  
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    let total = 1
    for(let j=0; j<arr.length; j++){
      if(i !== j)
        total *= arr[j]
    }
    newArr[i] = total
  }
  
 
  console.log("new Array", newArr)
  
}
let arr = [2,4,5,6]
productArr(arr)
