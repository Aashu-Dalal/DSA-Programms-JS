let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
for(let i= 0; i<arr.length; i++){
    let rowSum = 0
    for(let j= 0; j<arr[0].length; j++){
        rowSum+=arr[i][j]
    }
       console.log("Sum of row "+i+" is "+rowSum)
}
for(let i= 0; i<arr.length; i++){
    let colSum = 0
    for(let j= 0; j<arr[0].length; j++){
        colSum+=arr[j][i]
    }
       console.log("Sum of column "+i+" is "+colSum)
}
