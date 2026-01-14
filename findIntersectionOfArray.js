function intersection(arr1, arr2) {
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }

    return result
}

console.log(intersection([10, 20, 40], [20, 73, 70]))
