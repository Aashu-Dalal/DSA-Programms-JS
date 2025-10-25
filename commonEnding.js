function longestEnding(str1,str2){
    let common =""
    let i = str1.length-1 , j= str2.length-1
    while(i>=0 && j>=0 && str1[i] == str2[j]){
        common =str1[i] +common
        i--
        j--
    }
    return common 
}
let str1 = "programming "
let str2 = "gaming"
console.log(longestEnding(str1,str2))
