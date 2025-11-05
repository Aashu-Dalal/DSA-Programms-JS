let array= [7,5,2,9,1,4,8]
let newArray =[]
for(let i = 0; i<array.length; i++){
    if(array[i]%2 == 0){
        newArray.push(array[i]/2)
    }
    else{
        newArray.push(array[i]-1)
    }
}
console.log(newArray)
