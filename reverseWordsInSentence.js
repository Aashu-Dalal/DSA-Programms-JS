function reverseWords(str){

    let words = str.split(" ")

    let reversed = words.reverse()

    let result = reversed.join(" ")

    return result
}

console.log(reverseWords("I love coding"))
