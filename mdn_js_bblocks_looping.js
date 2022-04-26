// Math.random() returns a floating-point number x where:
// 0 <= x < 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));       // 0, 1, or 2
console.log(getRandomInt(1));       // 0
console.log(Math.random());         // 0 <= x < 1

// loop through collections!
// not just array ... we have Set and Map

let cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {       // for every cat (cats[x]) in cats,
    console.log(cat);
}

// map() = do something to each item in a collection
// create new collection containing changed items

function toUpper(string) {
    return string.toUpperCase();
}

// the return of toUpper is stored in a new collection
let upperCats = cats.map(toUpper);
console.log(upperCats);     // cats but in CAPS

// filter() = create new collection from old collection
// based on a given criteria

function lCat(cat) {
    return cat.startsWith('L');
}

// if the return of lCat is true, store item in new collectiom
let filtered = cats.filter(lCat);
console.log(filtered);      // ["Leopard", "Lion"]

// el klasiko for loop for just running code without looping through collections
function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        console.log(newResult);
    }
    console.log("...finished!");
}

calculate();

// if you really wanna loop through collections with for loop
// el klasiko array traversal!
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

// depending on the use case, for more control
// el klasiko for loops are stil the way to go
cats = ["Pete", "Biggles", "Jasmine"];
let myFavoriteCats = "My cats are called ";

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        myFavoriteCats = `${myFavoriteCats}and ${cats[i]}.`;
    }

    else {
        myFavoriteCats = `${myFavoriteCats}${cats[i]}, `;
    }
}

console.log(myFavoriteCats);        // "My cats are called Pete, Biggles, and Jasmine."

let contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
let searchResultPara = document.querySelector('#searchResult');
let input = document.querySelector('#search');
let btnNameSearch = document.querySelector('#searchName');

btnNameSearch.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();       // convert to lowercase for case insensitivity
    input.value = '';
    input.focus();
    searchResultPara.textContent = '';

    for (const contact of contacts) {
        const splitContact = contact.split(':');        // split a string into an array of two based on delimeter provided

        if (splitContact[0].toLowerCase() === searchName) {
            searchResultPara.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;      // as soon as this case is reached, break out of for loop
        }
    }

    if (searchResultPara.textContent === '') {
        searchResultPara.textContent = 'Contact not found.';
    }
});

let squareOutput = document.querySelector('#outputForSquare');
let squareInput = document.querySelector('#numberToSquare');
let squareBtn = document.querySelector('#btnForSquare');

squareBtn.addEventListener('click', () => {
    squareOutput.textContent = 'Output: ';
    const num = squareInput.value;
    squareInput.value = '';
    squareInput.focus();

    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);

        if (Math.floor(sqRoot) !== sqRoot) {        // check if square root is integer
            continue;
        }

        squareOutput.textContent += `${i} `;
    }
});

// while loop: run the code as long as condition isn't fulfilled
i = 0;
myFavoriteCats = "My cats are called ";

while (i < cats.length) {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    }

    else {
        myFavoriteCats += `${cats[i]}, `;
    }

    i++;
}

console.log(myFavoriteCats);

// do while loop: run the code at least once, then check if condition is fulfilled
i = 0;
myFavoriteCats = "My cats are called ";

do {
    if (i === cats.length - 1) {
        myFavoriteCats += `and ${cats[i]}.`;
    }

    else {
        myFavoriteCats += `${cats[i]}, `;
    }

    i++;
} while (i < cats.length);

console.log(myFavoriteCats);

/*
    Active learning: Launch countdown

let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
    const para = document.createElement('p');

    if (i === 10) {
        para.textContent = `Countdown ${i}`;
    }

    else if (i === 0) {
        para.textContent = `Blast off!`;
    }

    else {
        para.textContent = `${i}`;
    }

    output.appendChild(para);
    i--;
}

*/

/*
    Active learning: Filling in a guest list

for (person of people) {
    if (person === "Phil") {
        refused.textContent += "Phil, ";
    }

    else if (person === "Lola") {
        refused.textContent += "Lola, ";
    }

    else {
        admitted.textContent += `${person}, `;
    }
}

refused.textContent = refused.textContent.slice(0, -2) + ".";
admitted.textContent = admitted.textContent.slice(0, -2) + ".";
*/

/*
    loops summary

    First for...of:

    for (const item of array) {
        // code to run
    }

    for:

    for (initializer; condition; final-expression) {
        // code to run
    }

    while:

    initializer
    while (condition) {
        // code to run

        final-expression
    }

    and finally do...while:

    initializer
    do {
        // code to run

        final-expression
    } while (condition)
*/
