function firstNonRepeating(arr){
    for(let i = 0; i < arr.length; i++){
        let count = 0;

        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }

        if(count === 1){
            return arr[i];
        }
    }

    return -1;   // if none found
}

console.log(firstNonRepeating([2,5,83,20,1,20,4]));
