// Nested Scope

function one(){
    const name = "Pratik";
    function two(){
        const watching = "youtube";
        console.log(name);
    }
    // console.log(watching); // will give error
    two(); // is sab k liya alag call k stack ban te hai
}
one();

if(true){
    const name = "Pratik";
    if (name === "Pratik"){
        const age = 27; // if i have only put age = 27 then it would have been printed because it will take it as var
        console.log(`Hello my name is ${name} and I'm ${age} years old.`); 
    }
    //console.log(age); // will through error
}
//console.log(name); // will through error

// +++++++++++++++++++++++++++ Intreating ++++++++++++++++++++++++++++++

add1(13); // this will work because we have just declare it 
function add1(num){ //called function
    return num + 1;
}

// add1(13);

// Hosting 

add2(17); // this will through an error because we have declare it and store the function in an variable.
const add2 = function(num){ //when you store a function in a variable is know as expression 
    return num + 2;
}

// add2(17);