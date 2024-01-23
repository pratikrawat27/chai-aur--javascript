// array

const myArray = [0,1,2,3,4,5]; // 1,2 this are elements and it can be from any datatype

// another way to declare array

const myHero = new Array("Shaktiman", "Nagraj");

console.log(myHero[1]);
console.log(myHero.length);

// Array methods
// add
myHero.push("Rambo");
console.log(myHero);
// remove
myHero.pop();
console.log(myHero);
// shift remove first element of an array
myHero.shift();
console.log(myHero);
// unshift add first element of an array
myHero.unshift("Ram");
console.log(myHero);
// concat
let friends = ["Akash","Saurabh"];
friends = friends.concat(["Ankit","Vikas"]);
console.log(friends)

// To check if the given value is there in array or not and this will be T or F

console.log(myArray.includes(4));

// indexOf 
console.log(friends.indexOf(4)); // if there is no element it will give you -1
console.log(friends.indexOf("Ankit"));

// join it will add all element of an array into a string.

let newArray = myArray.join()
console.log(myArray);
console.log(newArray);
console.log(typeof newArray);

// slice and splice

let a = [1,2,3,4,5];
console.log(a.slice(0,2)); // from beginning to second element and didn't manipulate original array
console.log(a); //stack

console.log(a.splice(0,2)); // manipulate original array
console.log(a); //heap