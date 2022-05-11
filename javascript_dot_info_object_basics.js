let user = new Object();        // "object constructor" syntax
user = {};                      // "object literal" syntax

user = {
    name: "John",
    age: 30,        // trailing/hanging comma to make it easier to modify properties
};

console.log(user.name);
console.log(user.age);

// create and assign new property (key-value pair)
user.isAdmin = true;
console.log(user.isAdmin);

// delete property
delete user.age;
console.log(user.age);

// multiword property addition only through bracket notation
// user."likes birds" = true; is invalid
// dot requires no spaces, doesn't start with digit, no special chars
user["likes birds"] = true;
console.log(user["likes birds"]);

let key = "likes cats";
// same as user["likes cats"] = true;
user[key] = true;

console.log(user.key);      // doesn't work
console.log(user[key]);     // works

// computed property + bracket shenanigans
let fruit = "apple";
let bag = {
    [fruit]: 5,     // property name derived from variable fruit
};

console.log(bag.apple);

bag = {
    [fruit + "Computers"]: 5
};

console.log(bag.appleComputers);

// property value shorthands

function makeUser(name, age) {
    return {
        name,
        age
    };
}

let joe = makeUser("Joe", 29);
console.log(joe);

// there are no property name limitations
// any valid strings or symbols are okay
let obj = {
    for: 1,
    let: 2,
    return: 3
};

console.log(obj.for + obj.let + obj.return);

// if a property doesn't exist, referring to it will create it
// testing for property existence
user = {};
console.log(user.noSuchProperty === undefined);     // true

// we can also use the special operator "in"
user = {
    name: "John",
    age: 30 
};

console.log("age" in user);         // true, there is user.age
console.log("blabla" in user);      // false, there is no user.blabla

key = "age";
console.log(key in user);       // true

// special care for undefined
// you should never explicitly assign undefined, use null
obj = {
    test: undefined
};

console.log(obj.test);          // undefined
console.log("test" in obj);     // true, the property exists

// for in loop
user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    console.log(key);
    // value
    console.log(user[key]);
}

// objects are ordered in a special fashion
// integers are sorted, others in creation order
let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1" : "USA"
};

for (let code in codes) {
    console.log(code);
}

// non-integer keys = creation order
user = {
    name: "John",
    surname: "Smith"
};

user.age = 25;

for (let prop in user) {
    console.log(prop);      // name, surname, age
}

// "cheat" to force sort integer by creation order
codes = {
    "+49": "Germany",
    "+41": "Switzerland",
    "+44": "Great Britain",
    "+1" : "USA"
};

for (let code in codes) {
    console.log(+code);     // + unary operator converts to integer
}

/*
    Objects are associative arrays with several special features.

    They store properties (key-value pairs), where:
        - Property keys must be strings or symbols (usually strings).
        - Values can be of any type.

    To access a property, we can use:
        - The dot notation: obj.property.
        - Square brackets notation obj["property"]. Square brackets allow
          taking the key from a variable, like obj[varWithKey].

    Additional operators:
        - To delete a property: delete obj.prop.
        - To check if a property with the given key exists: "key" in obj.
        - To iterate over an object: for (let key in obj) loop.

    What we’ve studied in this chapter is called a “plain object”, or just Object.

    There are many other kinds of objects in JavaScript:
        - Array to store ordered data collections,
        - Date to store the information about the date and time,
        - Error to store the information about an error.
        - …And so on.
*/

// task 1 - hello, object
user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);

// task 2 - check for emptiness
function isEmpty(obj) {
    for (let prop in obj) {
        if (prop !== undefined) return false;
    }

    return true;
}

let schedule = {};
console.log(isEmpty(schedule));     // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule));     // false

// task 3 - sum object properties
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

sum = 0;

for (let name in salaries) {
    sum += salaries[name];
}

console.log(sum);       // 390

// task 4 - multiply numeric property valeus by 2

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") obj[key] *= 2;
    }
}

multiplyNumeric(menu);
console.log(menu);
