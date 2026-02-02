function nBonacci(n, m) {

    let result = []

    if (m === 0) return result

    for(let i = 0; i < n - 1 && result.length < m; i++){
        result.push(0)
    }

    if(result.length < m){
        result.push(1)
    }

    while(result.length < m){

        let sum = 0

        for(let i = result.length - n; i < result.length; i++){
            sum += result[i]
        }

        result.push(sum)
    }

    return result
}

console.log(nBonacci(3, 8))
