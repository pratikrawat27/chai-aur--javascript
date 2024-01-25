// this current context ko refer kar te hai eg: name, price and welcomeMessage inside user
// in -> function we cant use this keyword.
const user = {
    name: "Pratik",
    price: 999,

    welcomeMessage: () => {
        console.log(`Welcome ${user.name} to the website.`);
    }
}

user.welcomeMessage();
user.name = "Sonu";
user.welcomeMessage(user);
console.log(this); // will give empty obj {} because global k kuch context nhai hai that y

// this didn't work in function

function chai(){
    const name = "Pratik";
    console.log(`${this.name} is have a chai`); // show's undefined
}

chai();

// ---> function

const chai1 = () => {
    const name = "Pratik";
    return `${this.name} is having Chai`;
}

console.log(chai1());

// Basic -> function
const add2Num = (a , b) => {
    return a + b;
}

console.log(add2Num(10,10));

// Impulsive return

const div2num = (a , b) => a / b;
// OR, if use {} then you have to use return keyword 
const sub2num = (c , d) => (c / d); // use this if you are returning obj
// eg:
const obj = () => ({username: "Pratik"}) // if you use {} only then u you have to use return keyword

console.log(div2num(4,2));
console.log(div2num(4,2));
console.log(obj());

// Eg of this
function RegularFunction() {
    this.value = 1;
  
    setTimeout(function () {
      // In a regular function, 'this' refers to the object that called the function
      this.value++;
      console.log(this.value); // Outputs NaN because 'this' is not what you might expect
    }, 1000);
  }
  
  function ArrowFunction() {
    this.value = 1;
  
    setTimeout(() => {
      // In an arrow function, 'this' is inherited from the enclosing scope (ArrowFunction)
      this.value++;
      console.log(this.value); // Outputs 2 as expected
    }, 1000);
  }
  
  new RegularFunction(); // Outputs NaN
  new ArrowFunction();   // Outputs 2