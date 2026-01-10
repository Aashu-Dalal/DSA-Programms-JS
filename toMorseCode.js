function toMorse(str) {
    const morseMap = {
        A: ".-",    B: "-...",  C: "-.-.",  D: "-..",
        E: ".",     F: "..-.",  G: "--.",   H: "....",
        I: "..",    J: ".---",  K: "-.-",   L: ".-..",
        M: "--",    N: "-.",    O: "---",   P: ".--.",
        Q: "--.-",  R: ".-.",   S: "...",   T: "-",
        U: "..-",   V: "...-",  W: ".--",   X: "-..-",
        Y: "-.--",  Z: "--.."
    }

    let result = []

    for (let ch of str.toUpperCase()) {
        result.push(morseMap[ch])
    }

    return result.join(" ")
}

console.log(`HELLO in Morse code is: ${toMorse("HELLO")}`)
