// There is two way to declare obj
// 1.literal and 2.Constructor

// singleton which ever constructor we create an obj it create singleton obj
// but when we create obj in different way so it doesnt create a singleton obj uske multiple instance banete hai

// if we declare it as an literal then singleton nahi ban te hai
// when we declare obj as an constructor then we get singleton obj

// object literal
// its a way to declare obj
// obj has keys and values

Object.create //constructor method
const xyz = {} // literal

// create a symbol and use it in obj
const sym = Symbol("intro");

const user = {
    name: "Pratik",
    "full name": "Pratik Singh Rawat",
    age: 27,
    [sym]: "I am Pratik",
    gender: "Male",
    email: "pratikrawat27@gmail.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Wednesday","Friday"]
}

// Access the obj
console.log(user.gender);
console.log(user["lastLoggedInDays"]);
// [] use mostly when there is an gap in key name
console.log(user["full name"]);
console.log(user[sym]);
console.log(typeof sym);

// change values
user.isLoggedIn = true;
console.log(user.isLoggedIn);

// lock the value
// Object.freeze(user);
// user.age = 34;
// console.log(user);

// adding function in a obj
user.greating = function(){
    console.log(`Hello this is ${this.name}`);
}
user.greating();
user.greating1 = () => {
    console.log(`Hello this is ${user.name}`);
} // when you use -> function 'then' keyword this doesn't work
user.greating1();