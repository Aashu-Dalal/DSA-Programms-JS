function euler(num){
    if(num == 0) return 1
    if(num == 1) return 0
    let first = euler(num-1)
    let second = euler(num-2)
    return (2*num-1) * first + (num-1) *second
}
console.log(euler(4))
