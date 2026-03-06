function groupAnagrams(arr){

    let result = {}

    for(let i = 0; i < arr.length; i++){

        let word = arr[i]

        let sorted = word.split("").sort().join("")

        if(result[sorted]){
            result[sorted].push(word)
        }
        else{
            result[sorted] = [word]
        }

    }

    return Object.values(result)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
