// array to string methods
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());         // "Banana,Orange,Apple,Mango"
console.log(fruits.join(" * "));        // "Banana * Orange * Apple * Mango"

// stack methods on arrays (again: methods are functions part of objects)
// pop returns and removes the last element
console.log(fruits);            // ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.pop());      // "Mango"
console.log(fruits);            // ["Banana", "Orange", "Apple"]

// push adds an element at the end and returns the new array length
console.log(fruits);                    // ["Banana", "Orange", "Apple"]
console.log(fruits.push("Kiwi"));       // 4
console.log(fruits);                    // ["Banana", "Orange", "Apple", "Kiwi"]

// shift removes the first element, returns the removed element
console.log(fruits.shift());            // "Banana"
console.log(fruits);                    // ["Orange", "Apple", "Kiwi"]

// unshift adds a new first element, returns the new length, shifts all to right
console.log(fruits.unshift("Banana"));      // 4
console.log(fruits);                        // ["Banana", "Orange", "Apple", "Kiwi"]

// can add more than one new element at front
console.log(fruits.unshift("Lemon", "Kiwi"));       // 6
console.log(fruits);                                // ["Lemon", "Kiwi", ...]

// change element via reinitialization
fruits[0] = "Cherry";
console.log(fruits);        // ["Cherry", "Kiwi", ...]

// append element to end via length, like push
fruits[fruits.length] = "Mango";
console.log(fruits);        // [..., "Apple", "Kiwi", "Mango"]

// delete to leave undefined holes in array
delete fruits[5];               // remove duplicate Kiwi that somehow got in there
console.log(fruits);            // "Kiwi" is now empty
console.log(fruits.length);     // 7 even if fruits[5] is empty

// concat to merge any number of arrays
// original arrays are not modified, new array created
let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren);        // ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

let myAliens = ["Robin", "Morgan"];
myChildren = myGirls.concat(myBoys, myAliens);
console.log(myChildren);        // [..., "Robin", "Morgan"]

// splice() method adds new items to array
fruits = ["Banana", "Orange", "Apple", "Mango"];

// where 2 is the position to add, 1 is elements to remove
console.log(fruits.splice(2, 1, "Lemon", "Kiwi"));      // ["Apple"]
console.log(fruits);

fruits = ["Banana", "Orange", "Apple", "Mango"];

// remove at index 0, delete 1 element ("Banana")
console.log(fruits.splice(0, 1));
console.log(fruits);

// slice() method slices out a piece of an array
// creates new array, doesn't modify original
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1);
console.log(citrus);        // the above but no banana

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
citrus = fruits.slice(3);
console.log(citrus);        // ["Apple", "Mango"]

// slice() can take two arguments
// first is start index, second is end index but not including actual end
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(citrus = fruits.slice(1, 3));       // returns the new array
console.log(citrus);                            // ["Orange", "Lemon"]

/*
    JS auto converts array to comma-separated string
    All JS objects have a toString() method
*/
