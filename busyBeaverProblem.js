
function bb(n){
    if(n<1){
        return 0
    }
    if (n==1){
        return 1
    }
    else{
        return bb(n-1)*2+2
    }
}
console.log(bb(3))
