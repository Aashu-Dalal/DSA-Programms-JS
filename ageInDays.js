function ageDays(age){
    if(age<1){
        return ("Invalid Age. Please Enter Valid Age!")
    
    }
    else{
         return ("Your age in days is:"+age*365)
    }
}
console.log(ageDays(0))
console.log(ageDays(45))
