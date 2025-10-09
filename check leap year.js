let year = 1900
if(year%4 == 0 &&  year %100 != 0 || year %400 == 0){
    console.log("Yes the given year is Leap year")
}
else{
    console.log("No, the year is not a Leap year")
}
