let start = "Red"
let k = 5

let signals = ["Red", "Yellow", "Green"]

let index = signals.indexOf(start)

let result = signals[(index + k) % signals.length]

console.log("Signal after", k, "steps is:", result)
