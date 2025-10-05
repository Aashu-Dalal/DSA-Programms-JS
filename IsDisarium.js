Let num = "89"
function isDisarium(num ){
    let sum=0;
    for(let i=0; i<num.length; i++){
        sum += Number(num[i])**(i+1)
    }
    if(sum == Number(num)){
        return "Is Disarium"
    }
    else return "Not"
}
console.log(isDisarium(num))
