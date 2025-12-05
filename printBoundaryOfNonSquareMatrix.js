let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 6, 4]
];
for(let i=0; i<arr.length; i++){
    let line =""
    for(let j=0; j<arr[0].length; j++){
        if(i==0 || j==0 || i==arr.length-1 || j== arr[0].length-1){
            line+=arr[i][j] +" "
        }
        else{
            line += "  "
        }
    }
    console.log(line)
}
