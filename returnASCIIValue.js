function printAsciiValues(input) {
    
    let str = String(input);

    for (let i = 0; i < str.length; i++) {
        console.log(`Character: '${str[i]}'  ASCII Value: ${str.charCodeAt(i)}`);
    }
}


printAsciiValues("a");
printAsciiValues("Aashu");
printAsciiValues(123);
printAsciiValues("@# ");
