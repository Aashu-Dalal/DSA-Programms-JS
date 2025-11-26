let arr = [2, 3, 4, 6, 8, 9];
for(let a= 0; a<arr.length; a++){
    for(let b= a+1; b<arr.length; b++){
            if(((arr[a]<arr[b])) && Math.sqrt(arr[a]*arr[b]) == Math.floor(Math.sqrt(arr[a]*arr[b]))){
                console.log("("+arr[a]+","+arr[b]+")")
            }
        
    }
}
