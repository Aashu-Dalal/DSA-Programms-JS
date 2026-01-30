function isHighest(num){
    let s = String(num)
    let swapped = s[1] + s[0]
    return num >= Number(swapped)
}

console.log(isHighest(27))   // false
console.log(isHighest(42))   // true
