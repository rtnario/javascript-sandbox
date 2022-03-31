// single line if
/*
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );
*/

// if() statement does boolean conversion
// 0, "", null, undefined, and NaN all become false/falsy
// literally anything else, even -1, becomes true/truthy
/*
if (0) {
    // code that will never execute
}

if (1) {
    // code that will execute
}

let cond = (year == 2015) // pre-evaluated boolean

if (cond) {
    // will run depending on result of year == 2015
}
*/

// conditional operator ?
/*
format: let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;
    - if age > 18 evaluates to true, return true
    - if age > 18 evaluates to false, return false

for the specific example above though, this is simpler
let accessAllowed = age > 18;
*/

// chaining conditional/question mark operators
age = 101;

message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

console.log(message);

// if else version
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }

console.log(message);

// non-traditional ? usage
// and also not recommended
/*
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
*/

// tasks!
// this will show, because any non-empty string converts to true in boolean
// only empty string is falsy
/*
if ("0") {
    alert( 'Hello' );
  }
*/

/*
let answer = prompt("What's the \"official\" name of JavaScript?", "");

if (answer === "ECMAScript") {
    alert("Right!");
}

else {
    alert("You don't know? \"ECMAScript\"!");
}
*/

/*
let num = prompt("Give me a number!");

if (num > 0) {
    alert(1);
}

else if (num < 0) {
    alert(-1);
}

else {
    alert(0);
}
*/

a = 1;
b = 2;
result = (a + b < 4) ? "Below" : "Over";
console.log(result);

let login;
login = "Director";

message = (login === "Employee") ? "Hello" :
          (login === "Director") ? "Greetings" :
          (login === "")         ? "No login" : "";

console.log(message);
