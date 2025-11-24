// Finding pairs which have two elements from array that have (a*b) is even and (a+b) > 10
let arr = [2,4,6,1,9,5]
for(let i= 0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
    
        if(((arr[i]+arr[j])>10) && ((arr[i]*arr[j])%2 == 0)){
            console.log("("+arr[i]+","+arr[j]+")")
        }
        
    }
    
}
