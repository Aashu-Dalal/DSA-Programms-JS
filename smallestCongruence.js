let arr1 = [30,40,50]
let arr2= [20,30,10]
let x = Math.max(...arr2)
while(true){
    isValid = true
    
    for(let i=0; i<arr1.length; i++){
        if(x%arr1[i] !== arr2[i]){
            isValid = false
            break
        }
    }
    if (isValid){
        console.log(x)
        break
    }
    x++
}
