/*
>, <    : Greater/Less Than
>=, <=  : Greater/Less Than or Equals
==      : Equals
          NOTE: == for equality, = for assignment
!=      : Not Equals
true    : yes, correct, the truth
false   : no, wrong, not the truth
*/

console.log( 2 > 1 );       // true (correct)
console.log( 2 == 1 );      // false (wrong)
console.log( 2 != 1 );      // true (correct)

result = 5 > 4;             // assign the result of the comparison
console.log( result );      // true

// dictionary/lexicographical basis, letter-by-letter
// acually unicode-by-unicode
console.log('Z' > 'A');             // true, Z has a greater unicode value
console.log('Glow' > 'Glee');       // true, o has a greater unicode value
console.log('Bee' > 'Be');          // true, Bee has more letters

// when comparing different types, JS converts values to numbers when applicable
console.log('2' > 1);       // true, string '2' becomes a number 2
console.log('01' == 1);     // true, string '01' becomes a number 1

console.log(true == 1);         // true
console.log(false == 0);        // true

// the below is apparently because of different conversion rules
a = 0;
console.log(Boolean(a));        // false, because number is registered as Boolean
b = "0";
console.log(Boolean(b));        // true, because the value 0 exists, empty string would be false
console.log(a == b);            // true!

// strict equality
// normal == converts operands of different types into numbers
// meanwhile === checks equality without type conversion
// meaning it checks for both value and type equality
console.log(0 == false);        // true
console.log('' == false);       // true
console.log(0 === false);       // false, because the types are different

// difference between !== and !=
// in != type conversion (to number) still occurs
// in !== even if by value they are equal, if by type they aren't, false
console.log(7 != '7');      // false, conversion to number occurs, and 7 == 7
console.log(7 !== '7');     // true, the value is the same by the types aren't

// funny business feat. null & undefined
console.log(null === undefined);        // false
console.log(null == undefined);         // true

// for > < >= <=, null converts to 0 and undefined converts to NaN
console.log(0 == NaN);                  // false

// null VS 0
console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null >= 0);     // true??

/*
EQUALITY CHECKS work differently from COMPARISON CHECKS
Comparison checks convert null to 0
Equality checks do not convert null/undefined, they equal each other and nothing else
*/

// undefined shouldn't be compared to anything at all
console.log(undefined > 0);         // false, converted to NaN and false for all
console.log(undefined < 0);         // false, converted to NaN and false for all
console.log(undefined == 0);        // false, only true when paired with null/undefined

// test!
console.log(5 > 4);                     // true
console.log("apple" > "pineapple");     // false, dictionary comparison
console.log("2" > "12");                // true, dictionary comparison
console.log(undefined == null);         // true, sweet sila
console.log(undefined === null);        // false
console.log(null == "\n0\n");           // false, null only equals itself/undefined
console.log(null === +"\n0\n");         // false
