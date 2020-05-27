// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/

const P = 200000;
const I = 0.05;
const t = 30;
const name = 'Josh';



// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate.

Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12.

Create another variable called `periods` and give it the value of years*12.
*/

const monthlyInterestRate = I/12;
const periods = t * 12;




// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe to run calculations on your numbers. Save the final value into a variable called monthlyRate.

Hint: while these calculations can be done in one line, it might be helpful to create a variable called "numerator" to calculate the numerator, and another called "denominator" to calculate the denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/
console.log("\n\n*****  Task 2  *****\n");

const monthlyRate = Number(P * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods))/(Math.pow( 1 + monthlyInterestRate, periods)  - 1))).toFixed(2);
console.log(monthlyRate);


// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/
console.log("\n\n*****  Task 3  *****\n");

let mortgageCalculator = function (){
	const P = 200000;
	const I = 0.05;
	const t = 30;
	const name = 'Oscar';
	const monthlyInterestRate = I/12;
	const periods = t * 12;
	let monthlyRate = P * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods))/(Math.pow( 1 + monthlyInterestRate, periods)  - 1));
	monthlyRate = Number(monthlyRate).toFixed(2);
	return(name + ", your monthly rate is " + String(monthlyRate));
}
let r = mortgageCalculator();
console.log(r);



// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

console.log("\n\n*****  Task 4  *****\n");
let mortgageCalculator1 = function (P, I, N){
	const monthlyInterestRate = I/12;
	const periods = N * 12;
	let monthlyRate = P * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods))/(Math.pow( 1 + monthlyInterestRate, periods)  - 1));
	monthlyRate = Number(monthlyRate).toFixed(2);
	return(monthlyRate);
}
r = mortgageCalculator1(200000, 0.05, 30);
console.log(r);


// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.
*/


let mortgageCalculator2 = function (P, I, N, creditScore){
	if (creditScore > 740){
		I = I * 0.95;
	}
	if (creditScore < 660){
		I = I * 1.05;
	}
	const monthlyInterestRate = I/12;
	const periods = N * 12;
	let monthlyRate = P * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods))/(Math.pow( 1 + monthlyInterestRate, periods)  - 1));
	monthlyRate = Number(monthlyRate).toFixed(2);
	return(monthlyRate);
}

r = mortgageCalculator2(200000, 0.05, 30, 741);
console.log("if your credit score was 741, your credit score would be " + r);

r = mortgageCalculator2(200000, 0.05, 30, 700);
console.log("if your credit score was 700, your credit score would be " + r);

r = mortgageCalculator2(200000, 0.05, 30, 659);
console.log("if your credit score was 659, your credit score would be " + r);


// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate.

This function should be the same as mortgageCalculator,
except it should console.log the monthly payment for 10 different interest rates at
0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/
console.log("\n\n*****  Task 6  *****\n");
function variableInterestRate(P, I, N){
	const periods = N * 12;
	const name = "Oscar";
	let monthlyInterestRate;
	let monthlyRate;

	for (let i = -0.02; i < 0.025; i += 0.005){
		monthlyInterestRate = (I + i) /12;
		monthlyRate = P * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods))/(Math.pow( 1 + monthlyInterestRate, periods)  - 1));
	monthlyRate = Number(monthlyRate).toFixed(2);
	console.log(name + ", with an interest rate of " + String(Number(I + i).toFixed(3)) + ", your monthly rate is " + String(monthlyRate));
	}
}
variableInterestRate(200000, 0.04, 30);


// 🌟🌟🌟 STRETCH 🌟🌟🌟//

/* Attempt any of the stretch goals below once you have finished the work above. Remember as always, these may require additional research beyond what you learned today */

/*  🏡 Add  `Property Tax`, `Homeowner's insurance` and `HOA fees` as parameters in your function to calculate total monthly spending on housing */


/* 🏡 Build a calculator function that accepts `monthly payment` and `interest rate` and returns the maximum loan that a person could afford */


/* 🏡 Explore using `window.prompt()` to allow a user to input parameters in the browser */


/* 🏡  Refactor your `variableInterestRate()` function to accept an array of interest rates (make sure to copy and paste as to not lose your work!) */


console.log("\n\n*****  Stretch  *****\n");

console.log("\nGet ready to type!!!");

function variableInterestRate1(P, I, N, name){
	const periods = N * 12;
	let monthlyInterestRate;
	let monthlyRate;
	let message = "Ok, " + name + ", when it comes to your mortgage;\n";

	for (let i = -0.02; i < 0.025; i += 0.005){
		monthlyInterestRate = (I + i) /12;
		monthlyRate = P * ((monthlyInterestRate * Math.pow(1 + monthlyInterestRate, periods))/(Math.pow( 1 + monthlyInterestRate, periods)  - 1));
	monthlyRate = Number(monthlyRate).toFixed(2);
	message = message + "\n" + "With an interest rate of " + String(Number(I + i).toFixed(3)) + ", your monthly rate is " + String(monthlyRate);
	}
	return(message);
}

let play = "yes";
let a1 = '';
let a2 = '0';
let name1 = '';
let message = '';
while (play[0] !== 'n' && play[0] !== 'N'){
	name1 = window.prompt("Hi! What's your name?");
	a1 = window.prompt("Hi, " + name1 + "! Are you interested in buying a home?");
	if (a1[0] == "y" || a1[0] == "Y"){
		a2 = window.prompt("That is so exciting!!!\nCan you give me a number for how much this house might cost?\n\n(just numbers... no commas please)");
	}
	else if (a1[0] == "n" || a1[0] == "N"){
		a1 = window.prompt("I get it... Houses are expensive!! Do you want to speculate how much your mortgage would cost if you could buy one?");
		if (a1[0] == "y" || a1[0] == "Y"){
			a2 = window.prompt("Ok... give me a number for how much this house might cost?\n\n(just numbers... no commas please)");
		}
		else{
			a2 = window.prompt("You are persistent... would you play along with me anyways?? \ngive me a number for how much this house might cost?\n\n(just numbers... no commas please)");
	}
	}
	else {
		play = window.prompt("I'm so sorry, I didn't really understand what you said... would you like to try again?");
	}
	if (Number(a2) > 0){
		message = variableInterestRate1(Number(a2), 0.04, 30, name1);
		play = window.prompt(message + "\n\n Pretty Cool, Right?\n\nWould you like to play again??");
	}
}
