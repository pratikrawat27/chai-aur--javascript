let score = "69";

console.log(typeof(score));

let valueInNumber = Number(score);  
console.log(typeof(valueInNumber));

// "69" -> 69
// "69abc" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1 / false -> 0

let status = 1;
// let status = ""; -> false
// let status = "Pratik"; -> true

let boolState = Boolean(status);
console.log(boolState);

let number = 99;

let strNum = String(number);
console.log(strNum);

// **************************** Operations *********************************

var a = 10; 
a += 2;
console.log(a);

var b = 15;
b -= 5;
console.log(b);

var c = 5;
c *= 2;
console.log(c);

var d = 4;
d /= 2;
console.log(d);

var e = 27;
e %= 7;
console.log("Remender " + e);

var f = 2;
f **= 3;
console.log(f);

let fname = "Pratik";
let lname = " Rawat";

console.log(fname + lname);

console.log("1" + 2); // -> 12
console.log(1 + "2"); // -> 12
console.log("1" + 2 + 2); // -> 122
console.log(1 + 2 + "2"); // -> 32

// increment

let x = 2;
let y = x++; //the increment operator increments and returns the value before incrementing.

console.log(x,y);

let w = 2;
let v = ++w; //the increment operator increments and returns the value after incrementing.

console.log(w,v);