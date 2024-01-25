let a = 10;
const b = 20;
var c = 30;

if(true){
    let a = 100;
    const b = 200;
    var c = 300; 
    console.log(`Inner ${a}`);
    console.log(`Inner ${b}`);
    console.log(`Inner ${c}`);
}

console.log(a); // 10 because its declare outside the scope
console.log(b); // 20 because const cant be change
console.log(c); // 300 because var can redeclare even if the variable is declare outside or inside of the scope

{} // -> scope. if it is use with a function or in if else then its know as scope

{} // -> inside scope is block and functional scope.
// out side {} is a globe scope

// var
// var can be global and functional scope. 
// var can be re declare even if its inside a scope or outside the scope
// var is replaced by let and const because it will overwrite the previous var with same variable name.

// let
// if you create let in a scope and tries to call that variable outside of scope then it will through an error
// let can be reassign like var but can't be redeclare like var.

// const 
// const can't be update or reassign and redeclare like var
// const also has block scope, similar to let.