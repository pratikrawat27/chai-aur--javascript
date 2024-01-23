const cars = ["BMW", "Ferrari", "Lamborghini"];
const bike = ["R1", "1000RRR", "V4"];

cars.push(bike);
console.log(cars); // Array in side array and not a good way to merge
console.log(cars[3][2]);

const cars1 = ["BMW", "Ferrari", "Lamborghini"];
const bike1 = ["R1", "1000RRR", "V4"];

const superSpeed = cars1.concat(bike1).flat(); // flat to put them in one line
console.log(superSpeed);

// spread operator
const superSpeed1 = [...bike1, ...cars1]; //same as concat but if you have more then two value then use this
console.log(superSpeed1);

// array k under array
const bigArray = [1, 2, 3, 4, [5, 6, 7], 8, [9, 10, [11, 12, 13]]];
const biggArray = bigArray.flat(Infinity);
console.log(biggArray);

// use when you are data scraping for web page
// isArray wil tell you the give this is array or not
console.log(Array.isArray("Pratik", don = {
    name: "Pratik",
    age: 25,
})); // false

// if you wanna convert this to array use from
console.log(Array.from("Pratik"));
console.log(Array.from(don = {
    name: "Pratik",
    age: 25,
})); // you cant convert obj to array directly. if you do like this then it will give you []

// .of it will return a new array from a set of elements will work as same as from

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3));