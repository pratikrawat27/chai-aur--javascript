const score = 4;
console.log(score);

// if you want exclusively decide you want this to be number then
//by using object
const Bal = new Number(69);

console.log(Bal);

// Number has less property's then strings

// toSring --> Convert number into string

console.log(Bal.toString());
console.log(Bal.toString().length);

// if you want to give decimal special use in e-commerce web to give persists value

const number = 23.885452424
console.log(number.toFixed(2));

// toPrecision 1 - 21 and return a string

console.log(number.toPrecision(2));
console.log(number.toPrecision(3));

// toLocaleString 1000 --> 1,000.

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //The , is based on US standards and this is defaults.
console.log(hundreds.toLocaleString("en-IN")); //Converted to Indian standards

// Maths

// absolute value + will be + but - will become +

console.log(Math.abs(-4));

// Round Off

console.log(Math.round(4.6));
console.log(Math.round(4.4));

// ceil will chose top number

console.log(Math.ceil(4.5));

// floor will chose bottom number

console.log(Math.floor(4.5));

// Min and Max

console.log(Math.min(4.5,3,0.5));
console.log(Math.max(4.5,3,0.5));

// random
// give random value 0 or 1 k beach m
console.log(Math.random());
console.log(Math.random() * 10); // give random value 0 or 10 k beach m
console.log((Math.random() * 10) + 1); // 1 to 9


const min = 4;
const max = 16;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
