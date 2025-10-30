let prompt= require ( 'prompt-sync')()
let noOfTimes = Number(prompt("Enter How many times You Washed hands in a day:"))
let noOfDays= Number(prompt("Enter How many days you washed your hands"))
let timeRequired = 21
let timesWashedHands = noOfTimes * noOfDays
let timeTakenInSec = timesWashedHands * timeRequired
let minutes = Math.floor(timeTakenInSec/60)
let seconds = timeTakenInSec%60
console.log(`${minutes} minutes ${seconds} seconds`)
