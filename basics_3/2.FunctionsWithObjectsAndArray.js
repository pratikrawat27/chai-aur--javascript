// If you dont know how much argument you will get eg shopping will can add multiple unlimited product then get the total amt

function calCartPrice(...num){ // same as spread it depend on the usage of the operator.
    return num;
}

console.log(calCartPrice(13,41,53,53)); // return a array

// Passing object in function

const user = {
    name:"Pratik",
    age:20,
}

function handleObj(anyObj){
    return `Hello my name is ${anyObj.name} and I'm ${anyObj.age} year old.`; // we didn't know which obj will be passed that way use parameter.name not this.name
}

console.log(handleObj(user));
console.log(handleObj({
    name: "Sonu",
    age: 26
})); // another way to pass object in function

// Passing Array in function

const myarray = [12,14,16];

function returnArray(array){
    return `This is the second value of an array: ${array[1]}`
}

console.log(returnArray(myarray));
console.log(returnArray([13,15,17])); // another way to pass array in function