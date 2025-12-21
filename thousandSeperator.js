let num = "484747474"
let result=""
let count=0
for(let i=num.length-1; i>=0; i-- ){
    result= num[i]+result 
    count++
    
    if(count%3 == 0 && i!= 0){
    result= ","+ result 
    }
}


console.log(result)
