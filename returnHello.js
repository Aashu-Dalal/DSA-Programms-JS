function getGreetingSwitch(language) {
  switch (language) {
    case "English":
      return "Hello";
    case "Spanish":
      return "Hola";
    case "French":
      return "Bonjour";
    case "Hindi":
        return "Namaste";
    case "Italian":
      return "Ciao";
    default:
      return "Hello"; // This is the required default case
  }
}



console.log(getGreetingSwitch("Italian")); 
console.log(getGreetingSwitch("Hindi")); 
