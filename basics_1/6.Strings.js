const NAME = "Pratik";
const REPOCOUNT = 26;

console.log(NAME + " " + REPOCOUNT + " value");
console.log(NAME[2]);

// OR

console.log(`Hello my name is ${NAME} and my Repo count is ${REPOCOUNT}`);

// Another way to declare string is by using object

const gameName = new String("God of war");
console.log(gameName[5]);

// We can also access syntax
console.log(gameName.__proto__);

// some of the obj

console.log(gameName.length);
console.log(gameName.toUpperCase());

// If you wanna check in which position a charter is

console.log(gameName.charAt(4));
console.log(gameName.indexOf("a"));

// substring

const NEWGAMENAME = gameName.substring(0,4); //it will not take te last 4 one
console.log(NEWGAMENAME);

// slices

const anotherGame = gameName.slice(0,4); //it will not take te last 4 one
console.log(anotherGame);

// you can take negative value also in slices

const another1Game = gameName.slice(-10,4);
console.log(another1Game);

// trim
// mostly use in input form

const newStringName = "   Pratik     ";
console.log(newStringName.trim());

const name = "    Ram";
console.log(name.trimStart());

const fname = "Sonu    ";
console.log(fname.trimEnd());

// Replace

const url = "https://pratik.com/pratik%20rawat";
// web automatically convert space in %20

console.log(url.replace("%20","-"));

// You can also ask if the given vale is there or not and give boolean value

console.log(url.includes("pratik"));

// split it will convert into an array

console.log(gameName.split(" "));
