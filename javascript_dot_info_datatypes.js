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

