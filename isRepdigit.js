function isRepdigit(num){
    let realnum = String(num)
    let digit=realnum[0]
    let repdigit = true
    for(let i=1; i<realnum.length; i++){
        if(realnum[i]!= digit){
            repdigit = false
            break
        }
    }
    if(repdigit){
        return true
    }
    else return false
}
console.log(isRepdigit(7777777))
console.log(isRepdigit(87677777))
