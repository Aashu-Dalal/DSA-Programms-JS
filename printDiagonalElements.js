let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i=0; i<arr.length; i++){
    let row=""
    for (let j=0; j<arr[0].length;j++){
        if((i==j) || i+j == arr.length-1){
            row+=arr[i][j] +" "
        }else{
            row+="  "
    }
}
console.log(row)
}
