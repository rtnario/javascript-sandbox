/*
    Logcal Operators in JS
    ||      : OR
    &&      : AND
    !       : NOT
    ??      : NULLISH COALESCING
*/

// || (OR)
console.log(true || true);          // true
console.log(false || true);         // true
console.log(true || false);         // true
console.log(false || false);        // false
console.log(1 || 0);                // 1, works just like true || false but number

hour = 9;
if (hour < 10 || hour > 18) {
    console.log("The office is closed.");
}

hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("The office is closed.");
}

// OR finds the FIRST truthy value
console.log(1 || 0);                                // returns 1 as truthy
console.log(null || 1);                             // returns 1 as truthy
console.log(null || 0 || 1);                        // returns 1 as truthy
console.log(undefined || null || 0);                // 0
console.log(undefined || null || 0 || true);        // returns true as truthy

// vs classical boolean OR
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
console.log(firstName || lastName || nickName || "Anonymous");      // SuperCoder returns first

/*
"short-circuit" evaluation
true || alert("not printed");
false || alert("printed");

the first returns true right away
the second command only runs if the first is false
*/

// && (AND)
console.log(true && true);          // true
console.log(false && true);         // false
console.log(true && false);         // false
console.log(false && false);        // false

hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
    console.log("The time is 12:30");
}

if (1 && 0) {
    console.log("won't work, because the result is falsy");
}

/*
    AND
        - evaluates left to right
        - converts operands into boolean, if false will stop and return original value
        - if all true, return last operand
        - AND returns the first FALSY value while OR returns the first TRUTHY value
*/

console.log(1 && 0);                    // 0
console.log(1 && 5);                    // 5, no falsy
console.log(null && 5);                 // null
console.log(0 && "no matter what");     // 0
console.log(1 && 2 && null && 3);       // null
console.log(1 && 2 && 3);               // 3

// && has HIGHER precedence than ||

// ! (NOT)
/*
    NOT
        - converts operands into boolean
        - returns the inverse value
*/

console.log(!true);                             // false
console.log(!0);                                // true
console.log(!!"non-empty string");              // true, shorthand boolean conversion
console.log(!!null);                            // false, shorthand boolean conversion
console.log(Boolean("non-empty string"));       // true, Boolean wrapper
console.log(Boolean(null));                     // false, Boolean wrapper

// ! (NOT) has the HIGHEST precedence of all logical operators
// executes first before && or ||

// test!
/*
alert( null || 2 || undefined );            // 2
alert( alert(1) || 2 || alert(3) );         // 1, then 2. alert returns undefined
alert( 1 && null && 2 );                    // null
alert( alert(1) && alert(2) );              // 1, then undefined
alert( null || 2 && 3 || 4 );               // 3
*/

age = 50;

if (age >= 14 && age <= 90) {
    console.log("Age is between 14 and 90.");
}

if (!(age >= 14 && age <= 90)) {
    console.log("Age is not between 14 and 90.");
}

if (age < 14 || age > 90) {
    console.log("Age is not between 14 and 90.");
}

/*
if (-1 || 0) alert( 'first' );              // first
if (-1 && 0) alert( 'second' );             //
if (null || -1 && 1) alert( 'third' );      // ???

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert( 'first' );

so as long as the statement inside if is truthy, it'll run
truthy = nonzero value

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert( 'second' );

is -1 a falsy value?

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );

how to calculate -1 && 1 = 1 ?
*/

/*
// check the login
let user = prompt("Who's there?");

if (user == "Admin") {
    let pass = prompt("Password:");

    if (pass == "TheMaster") {
        alert("Welcome!");
    }

    else if (pass == "" || pass == null) {
        alert("Cancelled");
    }

    else {
        alert("Wrong password");
    }
}

else if (user == "" || user == null) {
    alert("Cancelled");
}

else {
    alert("I don't know you");
}
*/

