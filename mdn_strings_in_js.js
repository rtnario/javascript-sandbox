const string = "The revolution will not be televised.";
console.log(string);

/* error, because any text without quotes around it has to be:
a variable name, property name, reserved word, etc
const badString1 = This is a test;
const badString2 = 'This is a test;
const badString3 = This is a test';
*/

// variable assignment works, because why wouldn't it
const badString = string;
console.log(badString);

// single or double quotes work
// but you programmed in C
// ' are for char, " are for strings
const sgl = 'Single quotes.';
const dbl = "Double quotes";
console.log(sgl);
console.log(dbl);

// this works
const sglDbl = 'Would you eat a "fish supper"?';
const dblSgl = "I'm feeling blue.";
console.log(sglDbl);
console.log(dblSgl);

// but just do this because consistency is way better
const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

// Is that you, string?
// IT WAS ME, TEMPLATE LITERAL
// works like a normal string but with the inclusion of variables
let greeting = `Hello`;

name = 'Chris';
greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"

// string concatenation via template literals
let one = 'Hello, ';
let two = 'how are you?';
let joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const button = document.querySelector('.btn2');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  alert("Cute si Irish Domingo");
}

button.addEventListener('click', greet);

// string concatenation via +
greeting = "Hello";
name = "Chris";
console.log(greeting + ", " + name); // "Hello, Chris"

// but this is more readable, so use it
greeting = "Hello";
name = "Chris";
console.log(`${greeting}, ${name}`); // "Hello, Chris"

// Numbers VS Strings
name = "Front ";
number = 242;
console.log(`${name}${number}`); // "Front 242"

// Number converts strings into numbers
let myString = '123';
let myNum = Number(myString);
console.log(typeof myNum);      // number

// Number types have the toString() method
let myNum2 = 123;
let myString2 = myNum2.toString();
console.log(typeof myString2);  // string

// Expressions in strings
let song = 'Fight the Youth';
let score = 9;
let highestScore = 10;
let output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output);  // "I like the song Fight the Youth. I gave it a score of 90%."

// Multiline strings
// template literals respect line breaks
output = `I like the song.
I gave it a score of 90%.`;
console.log(output);        // I like the song.
                            // I gave it a score of 90%.

// line break character equivalent
output = "I like the song.\nI gave it a score of 90%.";
console.log(output);        // I like the song.
                            // I gave it a score of 90%.
