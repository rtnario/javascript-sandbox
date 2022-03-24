let x = 3.14;       // A number with decimals
let y = 3;          // A number without decimals

x = 123e5;      // 12,300,000
y = 123e-5;     // 0.00123

// JAVASCRIPT NUMBERS ARE ALWAYS 64-BIT FLOATING POINT (IEEE 754)
// 52 bits (0-51)   : Value/Fraction/Mantissa
// 11 bits (52-62)  : Exponent
// 1 bit(63)        : Sign

// Integers are accurate only up to 15 digits
x = 999999999999999;
y = 9999999999999999;

console.log(x);     // correct log
console.log(y);     // becomes 10,000,000,000,000,000

// Floating point arithmetic is not always 100% accurate
x = 0.2 + 0.1;
console.log(x);     // 0.30000000000000004?

// Removing decimals helps with calculations
x = (0.2 * 10 + 0.1 * 10) / 10;
console.log(x);     // 0.3

// JavaScript uses + both for addition and concatenation
x = 10;
y = 20;
let z = x + y;
console.log(z);     // 30

x = '10';
y = '20';
z = x + y;
console.log(z);     // '1020'

x = 10;
y = '20';
z = x + y;
console.log(z);     // '1020'

x = '10';
y = 20;
z = x + y;
console.log(z);     // '1020'

x = 10;
y = 20;
z = 'The result is: ' + x + y;      // '1020'
console.log(z);

x = 10;
y = 20;
z = '30';
let result = x + y + z;     // '3030', interestingly the first arithmetic
                            // operation pushes through
console.log(result);

// JavaScript automatically attempts to convert strings to numbers,
// for all other operations aside from + due to concatenation
x = '100';
y = '10';
z = x / y;
console.log(z);     // 10

x = '100';
y = '10';
z = x * y;
console.log(z);     // 1000

x = '100';
y = '10';
z = x - y;
console.log(z);     // 90

x = '100';
y = '10';
z = x + y;
console.log(z);     // '10010'

// NaN = not a legal number, '[N]ot [a] [N]umber'
x = 100 / 'Apple';
console.log(x);
console.log(isNaN(x));

// Using NaN in a mathematical operation will always result into NaN
// Using NaN in string concatenation will treat NaN as a string
x = NaN;
y = 5;
z = x + y;
console.log(z);     // NaN

x = NaN;
y = '5';
z = x + y;
console.log(z);     // NaN5

console.log(typeof NaN);        // number

// Infinity (or -Infinity) will be returned if you calculate a number outside
// the largest possible number
let myNumber = 2;
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
}

console.log(myNumber);      // Infinity

x = 2 / 0;
y = -2 / 0;
console.log(x);     // Infinity
console.log(y);     // -Infinity
console.log(typeof Infinity);       // number

// Numeric constants are hexadecimal if preceded by 0x
x = 0xFF;
console.log(x);     // 255

// .toString() on numbers can output different bases
myNumber = 32;
console.log(myNumber.toString(32));
console.log(myNumber.toString(16));     // 10 hexadecimal
console.log(myNumber.toString(12));
console.log(myNumber.toString(10));     // 32 decimal
console.log(myNumber.toString(8));      // 40 octal
console.log(myNumber.toString(2));      // 100000 binary

// Normally JavaScript numbers are primitive values created from literals
x = 123;

// But numbers can also be defined as objects with the keyword new
y = new Number(123);

console.log(x + y);     // 246

// Do not create Number objects.
// The new keyword complicates the code and slows down execution speed.
// Number Objects can produce unexpected results
x = 500;
y = new Number(500);
console.log(x == y);        // true
console.log(x === y);       // false

// Comparing two JavaScript objects always returns false.
x = new Number(500);
y = new Number(500);
console.log(x == y);        // false
console.log(x === y);       // false
