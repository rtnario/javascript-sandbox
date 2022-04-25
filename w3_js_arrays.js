// creation
let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// spacing is ok
cars = [
    "BMW",
    "Volvo",
    "Saab"
]
console.log(cars);

// individual assignment
cars = [];
cars[0] = "Volvo";
cars[1] = "Volvo";
cars[2] = "Volvo";
console.log(cars);

// this way works but not preferred
// use array literal for simplicity, readability, execution speed
cars = new Array("Saab", "Volvo", "BMW");
console.log(cars);

// array access via index
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

// change individual element
cars[1] = "Lamborghini";
console.log(cars);

// arrays are a special type of object
console.log(typeof cars);       // object

// but arrays use numbers to access its elements,
// while actual objects use names (key-value pair)
let person1 = ["John", "Doe", 46];
let person2 = {firstName: "Jane", lastName: "Doe", age: 46};

console.log(person1[0]);            // "John"
console.log(person2.firstName);     // "Jane"
console.log(person2);

// you can store objects in an array
myArray = [];
myArray[0] = Date.now;
myArray[1] = () => 2 + 2;
myArray[2] = person2;

console.log(myArray);           // prints contents of array
console.log(myArray[0]());      // # of milliseconds elapsed since Jan. 1, 1970
console.log(myArray[1]());      // 4

console.log(cars.length);       // num of elements in array
console.log(cars.sort());       // alphabetically sorts

// length
let fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);        // 4

// first element
console.log(fruits[0]);                 // "Banana"

// last element, note - 1
console.log(fruits[length - 1]);        // "Mango"

// loops
// el classico
for (let i = 0; i < length; i++) {
    console.log(fruits[i]);
}

// forEach
fruits.forEach(fruitFunction);

function fruitFunction(value) {
    console.log(value);
}

// adding array elements
fruits = ["Banana", "Orange", "Apple"];
console.log(fruits);

// add via push
fruits.push("Lemon");
console.log(fruits);

// add via max length
fruits[fruits.length] = "Pineapple";
console.log(fruits);

// implicit hole
fruits[6] = "Black Hole";
console.log(fruits);            // empty at fruits[5], but length is 7
console.log(fruits[5]);         // undefined

// JS does NOT support asssociative arrays/arrays with named indexes
// the array will be converted into an object if tried
person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
console.log(person.length);
console.log(person[0]);
console.log(person);

// wait what? length is 0 but it's still an array?
person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length);     // 0
console.log(person[0]);         // undefined
console.log(person);            // array

/*
    arrays use numbered indexes
    objects use named indexes
    arrays are a special kind of object
*/

// you can create arrays with new Array()
// but you can also just use []
// especially since new Array() has some unexpected results
let points1 = new Array();
let points2 = [];

// same result
points1 = new Array(40, 100, 1, 5, 25, 10);
points2 = [40, 100, 1, 5, 25, 10];
console.log(points1);
console.log(points2);

// weird shit incoming
points1 = new Array(40, 100, 1);        // creates array with 3 elements
console.log(points1);
points1 = new Array(40, 100);           // creates array with 2 elements
console.log(points1);
points1 = new Array(40);                // creates empty array with size 40
console.log(points1);

// array recognition
console.log(typeof points1);                // object only, JS arrays are objects
console.log(Array.isArray(points1));        // true, ECMAScript 5/JS '09 isArray method
console.log(points1 instanceof Array);      // true
