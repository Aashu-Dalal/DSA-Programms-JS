
function factorial (num){
    if(num<= 1){
        return 1
    }
    else {
            return num*factorial(num-1)
    }
}

function wilsomPrime(p){
    let square= p**2
    
    if((factorial(p-1)+1)%square== 0){
        console.log("Yes",p,"the number is Wilsom Prime")
    }
    else{
        console.log("No,",p,"the number is not Wilsom Prime")
    }
}
wilsomPrime(5)
wilsomPrime(7)
