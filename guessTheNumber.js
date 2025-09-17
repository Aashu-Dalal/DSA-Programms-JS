let num = Number(prompt("Guess the number between range 1-50"));

let comp = Math.floor((Math.random() * 50)+1);


while (num !== comp) {
  if (num > comp) {
    alert("Too high");
  } else{
    alert("Too low");
  }
  num = Number(prompt("Guess the number between range 1-50"));
}

alert("Wow Right Guess");