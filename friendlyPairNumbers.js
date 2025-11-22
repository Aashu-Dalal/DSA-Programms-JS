let a = 6
let b = 28
let aFactorsSum = 0
let bFactorsSum = 0
for(let i=1; i<= a; i++){
    if(a%i == 0){
        aFactorsSum+= i
    }
}
for(let i=1; i<= b; i++){
    if(b%i == 0){
        bFactorsSum+=i
    }
}
if((aFactorsSum)/a == (bFactorsSum)/b ){
    console.log("Yes! The given numbers are Friendly numbers")
}
else{
    console.log("No! the numbers are not Friendly numbers")
}
