function collatzConjecture(n){
    let count = 0
    let sequence= []
    sequence.push(n)
    while(n!==1){
        if(n%2==0){
            n = n/2
            
        }
        else{
            n = (n*3)+1
        
        }
        count++
        sequence.push(n)
    }
    
    console.log("Sequence:",sequence.join("-->"))
    console.log("Steps:",count)
}
collatzConjecture(11)
