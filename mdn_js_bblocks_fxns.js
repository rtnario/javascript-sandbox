// built-in browser functions
let myText = "I am a string";
let newString = myText.replace("string", "sausage");
console.log(newString);                     // replace occurrence of 1st with 2nd

let myArray = ["I", "love", "chocolate", "frogs"];
let madeAString = myArray.join(' ');        // joins using param as delimeter
console.log(madeAString);

myNumber = Math.random();                   // decimal > 0 and < 1
console.log(myNumber);

// METHODS = FUNCTIONS that are part of objects

myFunction();       // calls the function once

function myFunction() {
    console.log("hello");
}

/*
    This form of creating a function is also known as function declaration.
    It is always hoisted, so you can call function above function definition
    and it will work fine.

    Hoisted = JS declarations be default are moved to the top
*/

// default params
function hello(name = "Chris") {
    console.log(`Hello ${name}!`);
}
  
hello('Ari');       // Hello Ari!
hello();            // Hello Chris!

// normal function vs anonymous function
// btdubstep defining functions w/ same name = last defined function
// will take priority, kinda like CSS
function myFunction2() {
    console.log("hello 2");
}

myFunction2();

/*
    This doesn't work by default. Function declarations require names.
    This is a function expression. Also, they're not hoisted.
    
    "You'll often see anonymous functions when a function expects to
    receive another function as a parameter."

function() {
    console.log("hello 3");
}
*/

/*
    "Traditional" format:
        function logKey(event) {
            console.log(`You pressed "${event.key}".`);
        }

        textBox.addEventListener('keydown', logKey);

    Anonymous Format:
        textBox.addEventListener('keydown', function(event) {
            console.log(`You pressed "${event.key}".`);
        });

    Arrow Function:
        textBox.addEventListener('keydown', (event) => {
            console.log(`You pressed "${event.key}".`);
        });

    NOTICE
        function(event){ ... } = (event) => { ... }

        function(event){ ... } SAME AS (event) => { ... }

        function(event){ ... } ===
        (event) => { ... }

        you take the word function, transform it into an arrow,
        and put it to the right side right next to where
        the brackets could be

    Arrow Function Single Line:
        textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

    Arrow Function Single Line + Single Pparam:
        textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));

    Arrow Function Single Line + Single Pparam + Single Return:
        const originals = [1, 2, 3];
        const doubled = originals.map(item => item * 2);
        console.log(doubled); // [2, 4, 6]

        where
        map() takes values from an array, applies the function in the params
        to each one, returns all in a new array

        item => item * 2

        SAME AS

        function doubleItem(item) {
            return item * 2;
        }

        TRANSFORM!

        step 1 - take name out to anonymize
        function (item) {
            return item * 2;
        }

        step 2 - transform function into arrow, put to right
        (item) => {
            return item * 2;
        }

        step 3 - single param, remove parenthesis
        item => {
            return item * 2;
        }

        step 4 - single line, remove brackets
        item => return item * 2;

        step 5 - single return, remove return
        item => item * 2;
*/

let textBox = document.querySelector("#textBox");
output = document.querySelector("#output");

textBox.addEventListener('keydown', event => output.textContent = `You pressed "${event.key}".`);

/*
    test!

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function chooseName() {
  let chosenName = names[Math.floor(Math.random() * names.length)];
  para.textContent = chosenName;
}

chooseName();

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);

-----

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const x = 50;
const y = 60;
const width = 100;
const height = 75;
const color = 'blue';

// Add your code here

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

function draw(x, y, width, height, color) {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

draw(x, y, width, height, color);

-----

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
const para = document.createElement('p');

// Add your code here

function random(min, max) {
// Math.ceil = round up
// Math.floor = round down
//  min = Math.ceil(min);
//  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function chooseName(nameList) {
  let chosenName = nameList[random(0, nameList.length)];
  return chosenName;
}

para.textContent = chooseName(names);

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);

-----

const names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada'];
const para = document.createElement('p');

// function isShort(name) {
//   return name.length < 5;
// }

// const shortNames = names.filter(isShort);

const shortNames = names.filter(name => name.length < 5);
para.textContent = shortNames;

// Don't edit the code below here!

section.innerHTML = ' ';

section.appendChild(para);
*/
