let arr = [
  [1, 2, 3],
  [4, 5, 6]
];
for(let i= 0; i<arr[0].length;i++){
    let row =""
    for(let j=0; j<arr.length;j++){
        row+=arr[j][i] +" "
    }
    console.log(row)
}
