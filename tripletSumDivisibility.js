let arr = [3, 6, 2, 1, 5, 4];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        for(let k=j+1; k<arr.length; k++){
            if((arr[i]+arr[j]+arr[k])%3 == 0){
                console.log("("+arr[i]+","+arr[j]+","+arr[k]+")")
            }
        }
    }
}
