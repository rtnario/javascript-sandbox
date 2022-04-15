/*
    THREE STEPS OF PROBLEM SOLVING

        1. UNDERSTAND THE PROBLEM
            - IF YOU DON'T UNDERSTAND THE PROBLEM,
              YOU WON'T KNOW WHEN YOU'VE SOLVED IT.
            - Write it down on paper
            - Reword it in plain English
            - Draw diagrams
            - Explain the problem to someone else

        2. PLAN
            - Does your program have a user interface? What will it look like?
              What functionality will the interface have? Sketch this out
              on paper.
            - What inputs will your program have? Will the user enter data or
              will you get input from somewhere else?
            - What's the desired output?
            - Given your inputs, what are the steps necessary to return
              the desired output?
            - PSEUDOCODE
                - writing out logic from program in natural language
                - helps slow down and think through the steps

        3. DIVIDE AND CONQUER (IMPLEMENT)
            - Solve subproblem by subproblem
            - It is okay to not know all the steps/have incomplete algorithm,
              solving subproblems often reveal the next steps
            - Do NOT solve the big problem in one go, always decompose
              the problem into smaller ones  
*/

let num = 20;

// top
console.time("Function #1");
for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    else if (i % 3 === 0) {
        console.log("Fizz");
    }

    else if (i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i);
    }
}
console.timeEnd("Function #1");

// me
console.time("Function #2");
for (let i = 1; i <= num; i++) {
    let mod3 = i % 3 === 0;
    let mod5 = i % 5 === 0;

    switch (true) {
        case mod3 && mod5:
            console.log("FizzBuzz");
            break;
        case mod3:
            console.log("Fizz");
            break;
        case mod5:
            console.log("Buzz");
            break;
        default:
            console.log(i);
    }
}
console.timeEnd("Function #2");
