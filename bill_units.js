let units = Number(prompt("Enter bill Units: "));
rate = 0;

if(units > 400){
    rate += (units - 400) * 13
    units = 400
}

if(units <= 400 && units >200){
    rate += (units-200) * 8
    units = 200
}

if(units <= 200 && units > 100){
    rate += (units-100) * 6
    units = 100
}

if(units <= 100){
    rate += units * 4
}

console.log(rate)