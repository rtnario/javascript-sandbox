// methods and properties are available to primitive values
// JS treats them as objects only when executing the above

txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
length = txt.length;        // length propery returns length of /num of char in string
console.log(length);        // 26

// positive number slice
str = "Apple, Banana, Kiwi";
part = str.slice(7, 13);
console.log(part);      // 'B' is in index 7
                        // ',' is in index 13
                        // "Banana" is the output, meaning characters 7-12 are sliced,
                        // ',' is not included as the end

// negative number slice
str = "Apple, Banana, Kiwi";
part = str.slice(-12, -6);
console.log(part);      // 'B' is in index -12 (count rtl, start with -1)
                        // ',' is in index -6
                        // "Banana" is the output, same principle as above

// single param slice means trimming to the left of the provided index
part = str.slice(7);
console.log(part);      // "Banana, Kiwi"
part = str.slice(-12);
console.log(part);      // "Banana, Kiwi"

// substring is like slice, but no negative values allowed
str = "Apple, Banana, Kiwi";
part = str.substring(7, 13);
console.log(part);      // "Banana"

// substr is like slice, but second param is length to extract instead of index
str = "Apple, Banana, Kiwi";
part = str.substr(7, 6);        // start on index 7, extract 6 characters
console.log(part);              // "Banana"

// when omitting second param, similar behavior with slice
str = "Apple, Banana, Kiwi";
part = str.substr(7);
console.log(part);      // "Banana, Kiwi"

// if negative, start with index, keep everything to the right, drop the left
str = "Apple, Banana, Kiwi";
part = str.substr(-4);      // -4 is 'K'
console.log(part);          // "Kiwi"

// replace!
// 1) does not change original string
// 2) returns new string
// 3) replaces ONLY first match
// 4) case-sensitive
text = "Please visit Microsoft!";
newText = text.replace("Microsoft", "W3Schools");
console.log(newText);       // "Please visit W3Schools!"

// use regex + /i flag to make it case insensitive
// regex is written without quotes
text = "Please visit Microsoft!";
newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);       // "Please visit W3Schools!"

// caps
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
console.log(text2);     // "HELLO WORLD!"

// smol
text1 = "Hello World!";
text2 = text1.toLowerCase();
console.log(text2);     // "hello world!"

// concat
// params include any number of strings
text1 = "Hello";
text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);     // "Hello World";

/* these two lines do the same thing
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");

NOTE:
ALL string methods in JS return new strings
Original string is never modified
"Strings are immutable: they cannot be changed, only replaced"
*/

// trim removes whitespace from both sides
text1 = "      Hello World!      ";
text2 = text1.trim();
console.log(text2);     // "Hello World!"

// padding (ECMAScript 2017)
// padStart
// where first param is desired length of string
// and second param is padding content to use until first param is achieved,
// without overwriting contents of original string
text = "5";
let padded = text.padStart(4, 0);
console.log(padded);        // "0005"

let padded2 = text.padStart(4, "eggnog");
console.log(padded2);       // "egg5"

text = "supercalifragilisticexpialidocious"
let padded3 = text.padStart(34, "eggnog");
console.log(padded3);       // "supercalifragilisticexpialidocious"

let padded4 = text.padStart(44, "eggnog");
console.log(padded4);       // "eggnogeggnsupercalifragilisticexpialidocious"

// padEnd
text = "5";
padded = text.padEnd(4, 0);
console.log(padded);        // "5000"

// charAt
text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char);      // "H"

// charCodeAt
// returns character's unicode
// UTF-16 code, integer between 0 and 65,535
text = "HELLO WORLD";
char = text.charCodeAt(0);
console.log(char);      // 72

// Property Access [] (ECMAScript 5, 2009)
// AKA accessing a string as if it were an array of characters starting at index 0
// BUT! Strings are not arrays, undefined is returned if nothing is found
// (while charAt returns an empty string)
// also it is READ ONLY
text = "HELLO WORLD";
char = text[0];
console.log(char);      // "H"

text[0] = "A";          // no error
console.log(text);      // "HELLO WORLD" pa rin. sabi nga read only

// String to Array via split
/*
text.split(",");        // split on commas
text.split(" ");        // split on spaces
text.split("|");        // split on pipe
text.split("");         // split every character

yarr harr in ye olde days they called it delimiter
*/
