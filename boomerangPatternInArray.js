function boomerang(arr){
    let newArray = []
    for(let i=0; i<=arr.length-3; i++){
        if(arr[i] == arr[i+2] && arr[i]!= arr[i+1]){
            newArray.push([arr[i],arr[i+1],arr[i+2]])
        }
    }
    return newArray
}
console.log(boomerang([1,3,1,7,7,6,7,8,6,7]))
