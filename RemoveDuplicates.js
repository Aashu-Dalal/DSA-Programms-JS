let arr = [ 1,9,5,3,2,63,73,63,6,3,3 ]
let unique=[]
for (let i = 0; i<arr.length; i++){
  if (!unique.includes(arr[i])){
    unique.push(arr[i])
  }
}
console.log(unique)
