// const -> Cant change value of a const or reassign a new value. But can update key in side of an object and index in an array.
// let/var -> Can be changed, but not recommended to use var because it is function scop. You can reassign a it like var but cant redeclare like const

// If you want to declare variable use let and var but mostly let.
// If you want to declare constant use const.

const ACCOUNTID = 69;
let accountEmail = "pratikrawat27@gmail.com";
var accountPassword = "Sonu27";
accountCity = "Mumbai";
// If you don't know what the value of the variable will be.
let accountState;

// ACCOUNTID = 666; -> Will through error
accountEmail = "morningstar@gmail.com";
accountPassword = "Lucifer666";
accountCity = "Heaven";

console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// Can redeclare and reassign.
var name = "Pratik";
var name = "Ram";

console.log(name);

// let will not change the value if you redeclare in a scope
let z = "Raj";

if (z === "Raj"){
    let z = "Sham"; 
}

console.log(z); // -> Raj

// or you can you table method.

console.table([accountEmail,accountPassword,accountCity,accountState]);