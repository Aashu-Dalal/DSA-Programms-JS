let str1 = "ebcdcba"
let str2 = "abcdcbe"

if(str1.length != str2.length){
    console.log("Not buddy string")
}
else if (str1 == str2){
    console.log("Yes they are buddy strings")
}
else{
    let diff = []
    for(let i= 0; i<str1.length; i++){
        if(str1[i] != str2[i]){
            diff.push(i)
        }
    }
    if(diff.length == 2 && str1[diff[0]] == str2[diff[1]] && str1[diff[1]] == str2[diff[0]]){
        console.log("Yes they are Buddy Strings")
    }
}
