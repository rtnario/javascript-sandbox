/*
Operand: what operators are applied to
In 5 * 2, there are two operands, sometimes called arguments
An operator is UNARY if it has a single operand
An operator is BINARY if it has two operands
*/

// numeric conversion, unary +
// No effect on numbers
x = 1;
console.log( +x ); // 1

y = -2;
console.log( +y ); // -2

// Converts non-numbers
console.log( +true ); // 1
console.log( +"" );   // 0

let word;
console.log(word = 'apple');  // assignment returns word

a = 1;
b = 2;

c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0

a = b = c = 2 + 2;
console.log(a);  // 4
console.log(b);  // 4
console.log(c);  // 4

/*
the above is equivalent to:
c = 2 + 2;
b = c;
a = c;
*/

/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

1) The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and
then we have "1" + 0, the same rule is applied.

2) The subtraction - (like most math operations) only works with numbers, it
converts an empty string "" to 0.

3) The addition with a string appends the number 5 to the string.

4) The subtraction always converts to numbers, so it makes " -9 " a number -9
(ignoring spaces around it).

5) null becomes 0 after the numeric conversion.

6) undefined becomes NaN after the numeric conversion.

7) Space characters, are trimmed off string start and end when a string is
converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0.
*/
