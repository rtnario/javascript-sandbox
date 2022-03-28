// string declarations
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
console.log(string1);       // "A string primitive"
console.log(string2);       // "Also a string primitive"
console.log(string3);       // "Yet another string primitive"
console.log(string4);       // String {'A String object'}

// string comparisons
a = 'a'
b = 'b'
console.log("Unicode value for a: " + a.charCodeAt());      // charCodeAt optional index parameter
console.log("Unicode value for b: " + b.charCodeAt());      // or so I found out
if (a < b) { // true
  console.log(a + ' is less than ' + b)
} else if (a > b) {
  console.log(a + ' is greater than ' + b)
} else {
  console.log(a + ' and ' + b + ' are equal.')
}

// string primitives VS string objects
let s_prim = 'foo'
let s_obj = new String(s_prim)

console.log(typeof s_prim) // Logs "string"
console.log(typeof s_obj)  // Logs "object"

let s1 = '2 + 2'                 // creates a string primitive
let s2 = new String('2 + 2')     // creates a String object
console.log(eval(s1))            // returns the number 4
console.log(eval(s2))            // returns the string "2 + 2"
console.log(eval(s2.valueOf()))  // returns the number 4
// valueOf() method returns the primitive value of a String object

// l0ngb0is
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";

console.log(longString);

longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";      // indents not allowed when using \

console.log(longString);
