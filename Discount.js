let prompt = require('prompt-sync')()
let amount = Number(prompt("Enter total Amount: "));

if(isNaN(amount)){
    alert("Enter Valid Input!")
}

else if(amount>0 && amount<=5000){
    disc = 0
    newAmount = amount - (disc/100)*amount
    console.log(newAmount)
}

else if(amount>5000 && amount<=10000){
    disc = 5
    newAmount = amount - (disc/100)*amount
    console.log(newAmount)
}

else if(amount>10000 && amount<=15000){
    disc = 10
    newAmount = amount - (disc/100)*amount
    console.log(newAmount)
}

else {
    disc = 15
    newAmount = amount - (disc/100)*amount
    console.log(`You Got ${disc}% discount and the new Amount is:`,newAmount)
}

