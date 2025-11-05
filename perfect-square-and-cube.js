function squareCube(num){
    if(isNaN(num)){
        console.log("Please Enter Valid Input")
        return 
    }
    let sqrt = Math.sqrt(num)
    let cbrt = Math.cbrt(num)
    if(sqrt == Math.floor(sqrt) && cbrt == Math.floor(cbrt)){
        console.log("Yes, the number is both perfect square and cube")
    }
    else{
        console.log("No, the number is not perfect square and cube")
    }
}

squareCube(729)
