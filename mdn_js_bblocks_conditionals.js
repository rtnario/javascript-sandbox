const select = document.querySelector('select');
const para = document.querySelector('.weatherpara');

select.addEventListener('change', setWeather);

// function setWeather() {
//   const choice = select.value;

//   if (choice === 'sunny') {
//     para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//   } else if (choice === 'rainy') {
//     para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
//   } else if (choice === 'snowing') {
//     para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//   } else if (choice === 'overcast') {
//     para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//   } else {
//     para.textContent = '';
//   }
// }

/*
Any value that is not false, undefined, null, 0, NaN, or an empty string ('')
actually returns true when tested as a conditional statement, therefore you
can use a variable name on its own to test whether it is true, or even that it
exists (that is, it is not undefined.)
*/

let cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

const select2 = document.querySelector('#theme');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select2.addEventListener('change', () => (select2.value === 'black' ) ? update('black','white') : update('white','black'));

/*
// practice code

let season = 'summer';
let response;

// Add your code here

if (season === "summer" ) {
  response = "mainit";
}

else if (season === "winter") {
  response = "malamig";
}

else {
  response = "ano 'yan";
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);

-----

let response;
let score = 100;
let machineActive = true;

// Add your code here

if (!machineActive) {
  response = "Please turn me on. ~_^";
}

else {
  if (score >= 0 && score < 20) {
    response = "That was a terrible score — total fail!";
  }

  else if (score >= 20 && score < 40) {
    response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
  }

  else if (score >= 40 && score < 70) {
    response = "You did a passable job, not bad!";
  }

  else if (score >= 70 && score < 90) {
    response = "That\'s a great score, you really know your stuff.";
  }

  else if (score >= 90 && score <= 100) {
    response = "What an amazing score! Did you cheat? Are you for real?";
  }

  else {
    response = "This is not possible, an error has occurred.";
  }
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);

-----

let response;
let score = 2;
let machineActive = true;

// Add your code here

if (!machineActive) {
  response = "Please turn me on. ~_^";
}

else {
  switch (true) {
    case score >= 0 && score < 20:
      response = "That was a terrible score — total fail!";
      break;
    case score >= 20 && score < 40:
      response = "You know some things, but it\'s a pretty bad score. Needs improvement.";
      break;
    case score >= 40 && score < 70:
      response = "You did a passable job, not bad!";
      break;
    case score >= 70 && score < 90:
      response = "That\'s a great score, you really know your stuff.";
      break;
    case score >= 90 && score <= 100:
      response = "What an amazing score! Did you cheat? Are you for real?";
      break;
    default:
      response = "This is not possible, an error has occurred.";
  }
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = `Your score is ${ score }.`;
para2.textContent = response;

section.appendChild(para1);
section.appendChild(para2);

-----


let machineActive = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here

if (!machineActive) {
  machineResult = "The machine is currently powered off.";
}

else {
  pwdResult = (pwd === "cheese") ? "User logged in successfully." : "Login attempt unsuccessful.";
}

// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
let para2 = document.createElement('p');

para1.textContent = machineResult;
para2.textContent = pwdResult;

section.appendChild(para1);
section.appendChild(para2);

*/
