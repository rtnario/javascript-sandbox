let message;
message = 'World: Hi there!'; // store the string 'Hello' in the variable named message

console.log(message); // shows the variable content

/*
// define the variable and assign the value
let message = 'Hello!';

// multiple variables in one line
let user = 'John', age = 25, message = 'Hello';

// single line per variable, multiline
let user = 'John';
let age = 25;
let message = 'Hello';

// indented style
let user = 'John',
  age = 25,
  message = 'Hello';

// comma-first style
let user = 'John'
  , age = 25
  , message = 'Hello';
*/

var whatsavar;
whatsavar = 'var is almost the same as let, but not exactly';
console.log(whatsavar);

let cookie_thief_1 = 'You stole the cookie!';
let cookie_thief_2;
cookie_thief_2 = cookie_thief_1;
console.log(cookie_thief_1);
console.log(cookie_thief_2);

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

console.log($ + _); // 3

const myBirthday = '14.02.1992'; // cannot ever be reassigned
console.log('Ramon\'s birthday is: ' + myBirthday);

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let chosenColor = COLOR_ORANGE;
console.log('ANG INGLES NG KAHEL AY: ' + chosenColor);

/*
special note: you use caps naming for "hard-coded" values only, use camelCase
for values you are yet to discover but will keep constant once derived
aka constants that are calcyulated in run-time during execution
like const pageLoadTime
*/

// TASKS

let admin;
let name;

name = 'John';

admin = name;

// alert(admin);
console.log(admin);

let ourPlanetName = 'Earth';
let currentVisitor = name;
