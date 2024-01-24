// de structuring array k bhi hote hai and ogj k bhi

// important    

const course =  {
    name: "Js",
    price: 999,
    instructor: "Hitesh"
}

// accessing an obj key and value you can use . or [] to access also
// if you want to make you code clean then use

const {name,price} = course; // nothing but sugarcoating
const {instructor: trainer} = course; // you can de-structure the key name.

console.log("Course name : " + name,"and price of the course is " + price);
console.log("The name of the trainer is " + trainer);

// ********************************* API k Concept ***********************************

// All the values come in JSON structure trough API
// This is JSON
// {
//     name: "Pratik",
//     age: 25,
// } 

// sometime we get JSON in array formate like
// const users = [
//     {
//         id: 1,
//         username: 'Pratik',
//     },
//     {
//         id: 2,
//         username: 'Sonu',
//     },
//     {
//         id: 3,
//         username: 'Ram',
//     }
// ]