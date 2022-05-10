let container = document.querySelector('#dom-container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

let controls = document.querySelector('.dom-controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

/*
    Query Selectors

        element.querySelector(selector)
            - returns a reference to the first match of selector

        element.querySelectorAll(selectors)
            - returns a “nodelist” containing references to all of the matches
              of the selectors
            - this is NOT an array, only looks like one, but lacks a lot of
              the properties and methods of normal arrays
            - if needed, convert to array using Array.from() or spread operator ...


    Element Creation

        document.createElement(tagName, [options])
            - create element with name tagName and supply optional parameters
            - const div = document.createElement('div');
            - not yet on the DOM, need to append/insert


    Append Elements

        parentNode.appendChild(childNode)
            - appends childNode as the last child of parentNode
        
        parentNode.insertBefore(newNode, referenceNode)
            - inserts newNode into parentNode before referenceNode


    Remove Elements

        parentNode.removeChild(child)
            - removes child from parentNode on the DOM and returns a reference to child


    Altering Elements

        - having a reference to an element allows you to alter its many properties

        const div = document.createElement('div');                     
            - creates a new div referenced in the variable 'div'

        div.style.color = 'blue';                                      
            - adds the indicated style rule

        div.style.cssText = 'color: blue; background: white;';          
            - adds several style rules

        div.setAttribute('style', 'color: blue; background: white;');    
            - adds several style rules
            - additional note: convert kebab case to camel case

        div.style.background-color
            - doesn't work - attempts to subtract color from div.style.background

        div.style.backgroundColor
            - accesses the div's background-color style

        div.style['background-color']
            - also works

        div.style.cssText = "background-color: white;"
            - ok in a string

      
    Editing Attributes

        div.setAttribute('id', 'theDiv');                              
            - if id exists, update it to 'theDiv', else create an id
              with value "theDiv"

        div.getAttribute('id');                                        
            - returns value of specified attribute, in this case
              "theDiv"

        div.removeAttribute('id');                                     
            - removes specified attribute


    Working with Classes

        div.classList.add('new');                                      
            - adds class "new" to your new div

        div.classList.remove('new');                                   
            - removes "new" class from div

        div.classList.toggle('active');                                
            - if div doesn't have class "active" then add it, or if
              it does, then remove it


    Adding Text Content

        div.textContent = 'Hello World!'                               
            - creates a text node containing "Hello World!" and
              inserts it in div

        div.innerHTML = '<span>Hello World!</span>';                   
            - renders the HTML inside div
*/

// add a new div, give it a class, and put some text in it
// JavaScript does NOT alter HTML, only the DOM
container = document.querySelector("#dom-container");
let content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

let redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey I'm red!";
container.appendChild(redText);

let blueText = document.createElement("h3");
blueText.style.color = "blue";
blueText.textContent = "I'm a blue h3!";
container.appendChild(blueText);

let divWithStuff = document.createElement("div");
divWithStuff.style.borderStyle = "solid";
divWithStuff.style.backgroundColor = "pink";
let h1InADiv = document.createElement("h1");
h1InADiv.textContent = "I'm in a div";
let pInADiv = document.createElement("p");
pInADiv.textContent = "ME TOO!";
divWithStuff.appendChild(h1InADiv);
divWithStuff.appendChild(pInADiv);
container.appendChild(divWithStuff);

// transferred function to external js, but only limited to one
let domBtn2 = document.querySelector("#dom-btn-2");
// domBtn2.onclick = () => alert("Hello World");
domBtn2.onclick = () => alertFunction();

// separation of concerns, multiple event listeners possible
let domBtn3 = document.querySelector("#dom-btn-3");
// domBtn3.addEventListener('click', () => {
//     alert("Hello World");
// });
domBtn3.addEventListener('click', alertFunction);

function alertFunction() {
    alert("YAY! YOU DID IT!")
}

// "With all three methods we can access more information about the event
//  by passing a parameter to the function that we are calling."
let domBtn4 = document.querySelector("#dom-btn-4");
domBtn4.addEventListener('click', function(e) {
    console.log(e);     // "e" references the event itself, is a callback from addEventListener\
    console.log(e.target);
    e.target.style.backgroundColor = "blue";
});

let domBtnsInContainer2 = document.querySelectorAll(".dom-btn-container-2")
domBtnsInContainer2.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});
