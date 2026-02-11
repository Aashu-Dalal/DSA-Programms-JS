function bit(input) {

    let i = 0;
    let result = [];

    while (i < input.length) {

        if (input[i] === '1') {
            result.push(input[i] + input[i+1]);
            i += 2;
        } else {
            result.push(input[i]);
            i += 1;
        }
    }
    
    if(result[result.length-1].length == 1){
        return "One-bit"
    }
    else{
        return "Two-bit"
    }

    
}
console.log(bit("101100"));
console.log(bit("11010"));
