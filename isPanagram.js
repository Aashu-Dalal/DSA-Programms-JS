let str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();

let isPangram = true;

for(let i = 97; i <= 122; i++){  // ASCII codes for a-z
    let ch = String.fromCharCode(i);
    if(!str.includes(ch)){
        isPangram = false;
        break;
    }
}

if(isPangram){
    console.log("Yes, it is a pangram");
} else {
    console.log("No, it is not a pangram");
}
