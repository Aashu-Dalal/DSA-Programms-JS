function stuttering(str) {
    let firstTwo = str.slice(0, 2)
    return firstTwo + "..." + firstTwo + "..." + str
}

console.log(stuttering("hello"))
