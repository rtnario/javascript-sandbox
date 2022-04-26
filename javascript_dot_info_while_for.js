// three iterations
i = 0;

while (i < 3) {
    console.log(i);
    i++;
}

// i becomes falsy by 0
// also, single-line body doesn't need curly braces
i = 3;

while (i) console.log(i--);

// do while executes body first, and continues so as long as condition is truthy
i = 0;

do {
    console.log(i);
    i++;
} while (i < 3);

/*
    for (begin; condition; step) {
    // ... loop body ...
    }

    begin: executes once on for loop enter
    condition: checked before every loop iteration, stops when false
    body: runs until condition is truthy
    step: executes after body iteration
*/

// you could use an inline variable for begin,
// or an existing one like you already did below
// inline variable scope is only within for loop
for (i = 0; i < 3; i++) {
    console.log(i);
}

// parts of for loop can be skipped
i = 0;

for (; i < 3; i++) {
    console.log(i);
}

for (; i < 3;) {        // equivalent to while(i < 3)
    console.log(i++);
}

// this is the while (true) of for loop
/*
    for (;;) {

    }
*/

// take numbers in and add them up until none is provided
// provide sum at the end after break;
/*
    "The combination “infinite loop + break as needed” is great for
    situations when a loop’s condition must be checked not in the
    beginning or end of the loop, but in the middle or even in several
    places of its body."

    let sum = 0;

    while (true) {
        let value = +prompt("Enter a number", '');

        if (!value) break; // (*)

        sum += value;
    }

    alert( 'Sum: ' + sum );
*/

// if i is not divisible by 2, print value to console
// continue is a "soft break", break out of the iteration and not the loop
// PSA: break/continue does not work with ternary operator ?
for (i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i);
}

/*

    Labels allow you to break out from multiple nested loops at once.
    The break will jump outside the for loop labelled "outer".

    Also, labels don't allow you to jump anywhere, they can only work for
    any code block.

    outer: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let input = prompt(`Value at coords (${i},${j})`, '');

            // if an empty string or canceled, then break out of both loops
            if (!input) break outer; // (*)

            // do something with the value...
        }
    }

    alert('Done!');
*/

/*
    We covered 3 types of loops:

        while – The condition is checked before each iteration.
        do..while – The condition is checked after each iteration.
        for (;;) – The condition is checked before each iteration,
                additional settings available.

    To make an “infinite” loop, usually the while(true) construct is used.
    Such a loop, just like any other, can be stopped with the break directive.

    If we don’t want to do anything in the current iteration and would like to
    forward to the next one, we can use the continue directive.

    break/continue support labels before the loop. A label is the only way
    for break/continue to escape a nested loop to go to an outer one.
*/

// IF IT HAS A REMAINDER, IT IS PRIME
// IF THERE IS NO REMAINDER, IT IS COMPOSITE

// 10
// 10 % 1 = 0
// 10 % 2 = 0
// 10 % 3 = 1

// LIST OF PRIMES from 2 to n

function listPrimes(num) {
    let primeList = "";

    for (i = 2; i <= num; i++) {
        let isComposite = false;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isComposite = true;
            }
        }

        if (!isComposite) {
            primeList += i + ", ";
        }
    }

    return primeList;
}

console.log(listPrimes(5));
console.log(listPrimes(10));
console.log(listPrimes(20));

// oh my god

/*
    solution using label

    let n = 10;

    nextPrime:
    for (let i = 2; i <= n; i++) { // for each i...
        for (let j = 2; j < i; j++) { // look for a divisor..
            if (i % j == 0) continue nextPrime; // not a prime, go next i
        }

        alert( i ); // a prime
    }

*/
