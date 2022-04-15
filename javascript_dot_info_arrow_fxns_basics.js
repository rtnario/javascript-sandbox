// you can have more than one argument in an arrow function
// let func = (arg1, arg2, ..., argN) => expression;

// the above is a shoter version of:
/*
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
*/

sum = (a, b) => a + b;
console.log(sum(1, 2));     // 3

double = n => n * 2;
console.log(double(3));     // 6

sayHi = () => console.log("Hello!");
sayHi();        // "Hello!"

age = 18;
welcome = (age < 18) ?
    () => console.log("Hello!") :
    () => console.log("Greetings!");

welcome();      // "Greetings!"

// traditional way
/*
function welcome() {
    if (age < 18) {
        console.log("Hello!");
    }

    else {
        console.log("Greetings!");
    }
}
*/

// multiline arrow functions
sum = (a, b) => {
    let result = a + b;
    return result;
};

console.log(sum(1, 2));     // 3
