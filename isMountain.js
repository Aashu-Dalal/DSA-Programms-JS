function isMountain(arr){

    if(arr.length < 3) return false

    let i = 0

    while(i + 1 < arr.length && arr[i] < arr[i + 1]){
        i++
    }

    if(i === 0 || i === arr.length - 1){
        return false
    }

    while(i + 1 < arr.length && arr[i] > arr[i + 1]){
        i++
    }

    return i === arr.length - 1
}

console.log(isMountain([0,3,5,9,12,10,8,6,3]))
