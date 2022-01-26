var myName = 'Jake';
/* above variable contains my name */
const stateNum = 50;
/* above variable contains the number of US states */
var smallSum = 4 + 5;
/* above variable resolves a small math operation */
function sayHello() {
    console.log('Hello World!');
}

sayHello()
/* the above is a function and its call */

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

/* the above function sorts the old enough from the too young */

let favVegetables = ['Broccoli', 'Romaine', 'Tomato', 'Alliums']

for (i = 0; i < favVegetables.length; i++) {
    console.log(favVegetables[i])
}

/* the above is an array of some vegetables, which iterates and logs to console */

let pet = {
    name: "N/A",
    breed: "Monstera"
};

console.log(pet.name, pet.breed);

/* the above is an object whose properties are displayed on the console */





let someObjects = [
    {
        name: 'Steve',
        age: 14
    },
    {
        name: 'Benjamin',
        age: 78
    },
    {
        name: "Raul",
        age: 17
    },
    {
        name: "Fenly",
        age: 7
    },
    {
        name: "Carrie",
        age: 41
    }
]

for (i = 0; i < someObjects.length; i++) {
    checkAge(someObjects[i].name, someObjects[i].age)
}

/* this array provides a list of objects whose properties serve as arguments in the checkAge function*/



function getLength(string) {
    return (string.length);
}

var Length = getLength("Hello World");


function even_or_odd(Length) {
    if (Length % 2 == 0) {
        console.log("The world is nice and even!");
    } else console.log("The world is an odd place!");

}

even_or_odd(Length); 
