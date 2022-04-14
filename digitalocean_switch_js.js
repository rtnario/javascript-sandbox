// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();

switch (day) {
	case 0:
		console.log("It's Sunday, time to relax!");
		break;
	case 1:
		console.log("Happy Monday!");
		break;
	case 2:
		console.log("It's Tuesday. You got this!");
		break;
	case 3:
		console.log("Hump day already!");
		break;
	case 4:
		console.log("Just one more day 'til the weekend!");
		break;
	case 5:
		console.log("Happy Friday!");
		break;
	case 6:
		console.log("Have a wonderful Saturday!");
		break;
	default:
		console.log("Something went horribly wrong...");
}

/*
If we had omitted the break keyword in each statement, none of the other
case statements would have evaluated to true, but the program would have
continued to check until it reached the end. In order to make our programs
faster and more efficient, we include the break.
*/

// Set the student's grade
const grade = 87;

switch (true) {
	// If score is 90 or greater
	case grade >= 90:
		console.log("A");
		break;
	// If score is 80 or greater
	case grade >= 80:
		console.log("B");
		break;
	// If score is 70 or greater
	case grade >= 70:
		console.log("C");
		break;
	// If score is 60 or greater
	case grade >= 60:
		console.log("D");
		break;
	// Anything 59 or below is failing
	default:
		console.log("F");
}

/*
The expression in parentheses to be evaluated is true in this example.
This means that any case that evaluates to true will be a match.

Just like with else if, switch is evaluated from top to bottom, and the
first true match will be accepted. Therefore, even though our grade
variable is 87 and therefore evaluates to true for C and D as well, the
first match is B, which will be the output.
*/

// Get number corresponding to the current month, with 0 being January and 11 being December
const month = new Date().getMonth();
console.log("current month: " + month);

switch (month) {
	// January, February, March
	case 0:
	case 1:
	case 2:
		console.log("Winter");
		break;
	// April, May, June
	case 3:
	case 4:
	case 5:
		console.log("Spring");
		break;
	// July, August, September
	case 6:
	case 7:
	case 8:
		console.log("Summer");
		break;
	// October, November, December
	case 9:
	case 10:
	case 11:
		console.log("Autumn");
		break;
	default:
		console.log("Something went wrong.");
}
