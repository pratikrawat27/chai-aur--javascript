// Date is an object and it start from i jan 1970 

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate);

// If you want to show specific date
// An instance means a version, or copy of something.

let mynewDate = new Date(2023, 1, 15); // in this month is like an array
console.log(mynewDate.toLocaleString());

let mynewDate1 = new Date(2023, 1, 15, 15 , 46);
console.log(mynewDate1.toLocaleString());

let mynewDate2 = new Date("2024-01-23");
console.log(mynewDate2.toLocaleString());

// Time Stamp

let myTimeStamp = Date.now(); // give you milliseconds time from 1970 to now.
console.log(myTimeStamp);
console.log(mynewDate1.getTime());
// to convert it into second 
console.log(Math.floor(Date.now()/1000));

// More Method of Date
let newDate = new Date();
console.log(newDate.getDate());
console.log(newDate.getDay()); // start from 1 to 7
console.log(newDate.getMonth()); // start from 0
console.log(newDate.getMonth() + 1);
console.log(newDate.getHours());

// Mostly use
newDate.toLocaleString("default", {
    weekday: "long",
    timeStyle: "full"
});