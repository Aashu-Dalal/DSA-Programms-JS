let num = 10
let str =""
for(let i= 1; i<=num; i++){
    if(i%3== 0){
        str+="Excuse "
        continue
    }
    str+=i+" "
}
console.log(str)
