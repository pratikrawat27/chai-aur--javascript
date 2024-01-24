//  Constructor or Singleton

const tinderUser = new Object();

tinderUser.id = "1";
tinderUser.name = "Pratik";
tinderUser.age = 27;
tinderUser.loggedIn = true;

console.log(tinderUser);

// Obj k under obj 

const regularUser = {
    email: "pratikrawat27@gmail.com",
    fullName: {
        name: "Pratik",
        surname: "Rawat",
        userDetails: {
            age: 27,
            gender: "Male"
        }
    }
}
console.log(regularUser.fullName.userDetails.gender);

// combined an obj

const obj1 = {
    1: "a",
    2: "b",
    3: "c",
}

const obj2 = {
    4: "d",
    5: "e",
    6: "f",
}

const obj3 = { ...obj1, ...obj2 }; // mostly we will use spread operator.
console.log(obj3)

// OR

const obj4 = Object.assign({}, obj1, obj2); //{} is an optional parameter. All the value get combined inside {} guaranteed
// target {} and sources obj1 and obj2
console.log(obj4);

// Jab database se value ate hai
// jabhi bhai data database se ate hai to Array formate m ate hai 

const users = [
    {
        id: 1,
        username: 'Pratik',
    },
    {
        id: 2,
        username: 'Sonu',
    },
    {
        id: 3,
        username: 'Ram',
    }
]

console.log(users[1].username); //because its an array that y used [] then . to access the obj

console.log(tinderUser);

// method to get all the keys

console.log(Object.keys(tinderUser)); // it will get all the key and combine and convert them into an array

// method to get all the keys

console.log(Object.values(tinderUser));

// entries array k uder array key and value k hesabse

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name')); //give true and false