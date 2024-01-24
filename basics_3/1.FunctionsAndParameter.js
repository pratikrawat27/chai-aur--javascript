// function
// function is like a group of code in a package which we can carry anywhere and print it anywhere

function sayMyName () {
    console.log("I am Saying My Name");
    console.log("I am Saying My Name");
    console.log("I am Saying My Name");
}
sayMyName();  // calling the function sayMyName is reference and the () make it execute

// function with parameter

function addNumber (num1, num2){
    return num1 + num2;   // this will show the result when we call this function
}
console.log(addNumber(5,6));     // 11 gave argument 5 and 6
console.log(addNumber(5,"6"));  // 56 it will conceder 5 as a string also
const total = addNumber(13,34);
console.log(total) ; // 47

function logInMessage(username){
    if(username === undefined){  //or if(!undefined)
        console.log("Please enter a name");
        return; // it will stop the function to work. The function will stop the execution when the return statement is called.
    }
    return `Hello there ${username}`;
}

function message(message = "Hi"){ // if undefined the the hi will be shown
    return `${message} this is Pratik`;
}
console.log(logInMessage("Pratik"));
console.log(logInMessage()); //it will show undefine
console.log(message("Hello"));
console.log(message());      // Hi