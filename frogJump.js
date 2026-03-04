function frogJump(x,y,d){
    let count =0
    while(x<y){
            count++
            x = x+d
    }
    return count
}
console.log(frogJump(10,85,30))
