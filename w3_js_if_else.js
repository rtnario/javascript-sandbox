/*
if to execute code if condition is true
else to execute code if condition is false
else if to specify new condition
switch to specify many alternative blocks of code
*/

let hour = new Date().getHours();
console.log("Hour: " + hour);

if (hour < 10) {
    console.log("Good morning!");
} else if (hour < 20) {
    console.log("Good day!");
} else {
    console.log("Good evening!");
}
