// function declaration
function sayHi() {
    console.log("Hello from sayHi()!");
}

sayHi();

// function expression
// - allows you to create a new function in the middle of any expression
// - in the example below, it happens during assignment expression
// - ... how do you call a function expression then?
// - a-ha, function expressions aren't hoisted.
sayHi = function eggnog() {
    console.log("Hello from eggnog() renamed as sayHi()!");
};

sayHi();

/*
    The function declaration and the function expression both do the same
    thing. Function declaration is classic-style, function expressions allow
    you to transform an ordinary variable into a function that you call like
    any other function (e.g. functionName()).

    Note that you can assign anonymous functions to a variable. If it were
    to have a name, as shown above by eggnog(), the name is overwritten and
    the eggnog() function is uncallable and out of scope. Essentially
    you renamed eggnog() to sayHi().
*/

// can you assign arrow functions?

sayHi = () => console.log("Hello from arrow function sayHi()!");

sayHi();

// due to hoisting, the original sayHi at the very top is overwritten
function sayHi() {
    console.log("Hello from the prioritized hoisted sayHi()!");
}

// but since the arrow function is expressed at runtime, sayHi shows the arrow again
sayHi();

// prints out the actual function, string representation of source code
console.log(sayHi);

function sayHowdy() {              // (1) create, equivalent of sayHi = { ... }
    console.log("Howdy");
}
  
let func = sayHowdy;               // (2) copy
  
func(); // Howdy                   // (3) run the copy (it works)!
sayHi(); // howdy                  // this still works too (why wouldn't it)

/*
// showOk, showCancel are callback functions/callbacks
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);
*/

/*
// same as above but with function expressions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
*/

/*
// same as above but with arrow functions
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
*/

// A FUNCTION EXPRESSION IS CREATED DURING RUNTIME AND USABLE ONLY AT THAT TIME.
// A FUNCTION DECLARATION IS USABLE ANYTIME.
// (IN STRICT MODE) A FUNCTION DECLARATION IS VISIBLE ONLY WITHIN ITS CODE BLOCK.

/*
let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined
*/

// what do you need to fix the above?
// our good old friend FORWARD DECLARATION!
age = 18;

let welcome;

if (age < 18) {

  welcome = function() {
    console.log("Hello!");
  };

} else {

  welcome = function() {
    console.log("Greetings!");
  };

}

welcome(); // ok now

// question mark operator/ternary mode

welcome = (age < 18) ?
  function() { console.log("Hello!"); } :
  function() { console.log("Greetings!"); };

welcome(); // ok now
