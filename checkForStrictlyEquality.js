function strictlyEqual(first, second){
    if(Array.isArray(first) && Array.isArray(second)){
        if(first.length !== second.length){
            return false
        }
        for(let i=0; i<first.length;i++){
            if(first[i]!== second [i]){
                return false 
            }
        }
        return true 
    }
    return first=== second 
}
console.log(strictlyEqual(2,"2"))
console.log(strictlyEqual([1,2,3],[1,4,2]))
console.log(strictlyEqual([1,2,3],[1,2,3]))
