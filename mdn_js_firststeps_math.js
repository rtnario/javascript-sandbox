const myInt = 5;
const myFloat = 6.667;
console.log(myInt);
console.log(myFloat);
console.log(typeof myInt);      // number
console.log(typeof myFloat);    // number

const lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);      // rounding
console.log(twoDecimalPlaces);      // 1.77

myNumber = '74';
myNumber += 3;      // '743'
console.log(typeof myNumber);   // string
console.log(Number(myNumber) + 3);       // 746

console.log(10 + 7);        // 17
console.log(9 * 8);         // 72
console.log(60 % 3);        // 0

let num1 = 10;
let num2 = 50;
console.log(9 * num1);      // 90
console.log(num1 ** 3);     // 1000
console.log(num2 / num1);   // 5

console.log(5 + 10 * 3);            // 35
console.log(num2 % 9 * num1);       // 50
console.log(num2 + num1 / 8 + 2);   // 53.25, PEMDAS applies

num1 = 4;
console.log(num1++);        // 4, number is printed before increment
console.log(num1);          // 5

num1 = 4;
console.log(++num1);        // 5, number is printed after increment
console.log(num1);          // 5

// assignment operators
x = 3;
y = 4;
x = y;

console.log(x += 4);        // 4 + 4 = 8
console.log(x -= 3);        // 8 - 3 = 5, don't forget x is assigned the new value
console.log(x *= 3);        // 5 * 3 = 15
console.log(x /= 5);        // 15 / 5 = 3

// comparison operators
console.log(5 === 2 + 4);      // strict equality: same value AND datatype
console.log('5' !== 2 + 3);    // strict-non-equality: different value OR datatype
console.log(10 < 6);           // less than
console.log(10 > 20);          // greater than
console.log(3 <= 2);           // less than or equal to
console.log(5 >= 4);           // greater than or equal to

let btn = document.querySelector('.btn1');
let txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Start machine') {
    btn.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    btn.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
}
