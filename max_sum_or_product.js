let input = "311"
let splited = input.split('').map(Number);
let sum = 0
let product= 1
for(let i = 0; i<splited.length; i++){
    sum+=splited[i]
    product*=splited[i]
}
/*if(sum>product ){
    console.log(sum)
}
else if (product>sum){
    console.log(product )
}
*/
console.log(Math.max(sum, product ))
