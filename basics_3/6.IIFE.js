// Immediately Invoked Function Expressions

// if you want to invoke the function immediately, but while there is a global variable  scope,  you can use an IIFE.
// to avoid polluting the global namespace, we can wrap our code in an IIFE (Immediately)

function chai() {
    console.log(`DB Connect by Pratik`);
}

chai();

// to use IIFE

(function chai() {
    // named IIFE
    console.log(`DB Connect by Pratik`);
})();

// () first is where we write function and () second once is for execution of the function.

// To avoid pollution from global variable we use IIFE and to immediately execute the function.

// (const DBconnectoer = () => {
//     return `DB Connected by Sonu`;
// })(console.log()); // will give you error

(() => {
    // simple IIFE or unnamed IFFE
    console.log(`DB Connected by Sonu`);
})();

// When you use IIFE you need to end the function by using ';'.
// because it will through error because the function will get executed or invoked but don't know where to end.

// but when you need to past the variable
const name = "Pratik"; 

((name) => {
    console.log(`Good Morning ${name}`);
})(); // this will give you undefine because we use IIFE

((name) => {
    console.log(`Your the best ${name}`);
})("Pratik");