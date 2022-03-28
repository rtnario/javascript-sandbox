// Number
console.log(n = 123);
console.log(n = 12.345);
console.log(1 / 0);                   // Infinity
console.log(Infinity);
console.log("not a number" / 2);      // NaN
console.log(NaN + 1);                 // NaN
console.log(3 * NaN);                 // NaN
console.log("not a number" / 2 - 1);  // NaN
console.log(NaN ** 0);                // 1

// BigInt
// for numbers greater than (2^53) - 1
// (2^53) - 1 = 9007199254740991
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
console.log(typeof bigInt);  // "bigint"

// String
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;    // extended functionality
console.log(phrase);                        // "can embed another Hello"

name = "John";
console.log(`Hello, ${name}!`);             // "Hello, John!"
console.log(`the result is ${1 + 2}`);      // "the result is 3"

// Boolean
let nameFieldChecked = true;    // yes, name field is checked
let ageFieldChecked = false;    // no, age field is not checked
let isGreater = 4 > 1;
console.log(isGreater);         // true

// Null
// special value which represents "nothing" ,"empty", "null pointer"
let age = null;
console.log(age);               // null
console.log(typeof age);        // object

// Undefined
// "value not assigned"
// null is used to assign an empty/unknown value,
// undefined is just a default for unassigned variables
let age2;
console.log(age2);              // undefined
let age3 = 50;
age3 = undefined;
console.log(age3);              // undefined
console.log(typeof age3);       // undefined

// Object
// all other types are "primitives" that contain only a single thing
// objects store collections of data and more complex entities
console.log(typeof undefined);          // "undefined"
console.log(typeof 0);                  // "number"
console.log(typeof 10n);                // "bigint"
console.log(typeof true);               // "boolean"
console.log(typeof "foo");              // "string"
console.log(typeof Symbol("id"));       // "symbol"
console.log(typeof Math);               // "object"
console.log(typeof null);               // "object", this is a recognized error
console.log(typeof alert);              // "function", also technically incorrect
// typeof(x) syntax is inaccurate because typeof is not a function

// Symbol
// ... "for unique identifiers"
// what does that mean?

// typeof
// returns a string with the name of the type
// returns object for null, but it's an error as null is not an object

// Useful task!
name = "Ilya";
console.log(`hello ${1}`);          // hello 1
console.log(`hello ${"name"}`);     // hello name
console.log(`hello ${name}`);       // hello Ilya
