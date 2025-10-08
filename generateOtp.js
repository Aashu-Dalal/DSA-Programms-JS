function getOtp(){
  let otp=  Math.floor(Math.random()*1000000).toString().padStart(6,'0')
  return otp
}
console.log(getOtp())
