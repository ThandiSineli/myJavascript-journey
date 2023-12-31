// STEP1.   Make sure to create a repo called "My Javascript Journey" and link this folder with that repository.
//          You should not have any issues, if you are having issues, go back to the git note or ask your friend 
//          before asking your lecturer for help.(You cannot forget git commands)
// STEP2.   Every push to github must be to a branch and a pull request has to be made to merge the branch with main. 
//          Any pushes to main will result in you having to restart from the beginning(from creating a repo).
// STEP3.   Follow the order : 1 create repo, 2 run all commands necessary to link these to folders, 
//          3 create and work on branch, 4 push branch and use a pull request to merge. 5 PULL YOUR CODE TO LOCAL REPO BEFORE CREATING ANOTHER BRANCH
// STEP4.   You must link this javascript file to an index.html page, taking FOLDER STRUCTURE into consideration.

//INTO TO JAVASCRIPT EXERCISE

// A. TASK 1:VARIABLES and OPERATORS
// 1. Create a variable called “language” and assign it the value “JavaScript”. Then create
// a variable called “score” and assign it the value “10”.

let language = 'JavaScript';
let score = 10;


// 2.Create two variables called “length” and “width”. Assign each variable a value of 10 and 5 respectfully. Use
// the variables to calculate the area of a rectangle with the length and width specified (remember area = length x width).
// Write the following to the console using CONCATENATION and BACKTICKS: 
// “The area of the rectangle is …” where … is the area you calculated.

let length = 10;
let width = 5;
let area = length * width;
console.log(`The area of the rectangle is ${area}`);

// 3.Create two variables called “num1” and “num2.” Assign each variable a value of 10 and 4 respectfully.
// Calculate and display in the console what the remainder is if num1 is divided by num2.

let num1 = 10;
let num2 = 4;
let remainder = num1 % num2;
console.log(`The remainder is ${remainder}`);

// 4.Using the variables you created in the previous step, output the results
// of the division in the following format: “num1 / num2 = x remainder y.” HINT: Backticks

let num3 = 10;
let num4 = 4;
let division = num1 / num2;
console.log(`num1 / num2 = ${division}`);


// B. Task 2:Data Types
// 1. Define the following data types with your own contents[ 'integer', 'decimal', 'string', 'array'(minimum: 3 items), 'Object'(minimum: 4 values)]
 // 2. Once you’ve created the variables, display them to the console
// 3. Use the ‘typeof’ function to check each variable
// 4. Create an array with numbers and strings. Comment what data type you expect this tobe. Then use the ‘typeof’ function on this array
// 5. Create a null variable and an undefined variable
1; let interger = 16
  let decimal = 16.5
  let string= '16'
 let array = [interger, decimal, string]
 let myObject ={
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
 }
 2;  console.log(interger)
  console.log(decimal)
  console.log(string)
  console.log(array)
  console.log(myObject)

 3;  console.log(typeof interger)
   console.log(typeof decimal)
   console.log(typeof string)
   console.log(typeof array)
   console.log(typeof myObject)

4; let arrayNumbers = { "one": [1,2,3], "two": [ 4,5,6], "three": [ 7,8,9] }
 console.log(typeof arrayNumbers)

5;  let nullVariables= { "one": null, "two": null}
    let undefinedVariables = { "one": null, "two": undefined, "three": undefined}

// ***********C. Task 3. functions and contional statements************g
// N.B. READ WITH UNDERSTANDING!!!
//  1.  Create 3 functions to convert R1000 into dollars, euros and pounds. Take function naming into consideration!
//  2.  Create a function that takes a value and calculates the amount entered including VAT (15%), amount entered should be R400.
//      Then display the message in the console, "The amount after tax is ...".
//  3.  Declare 3 variables 1stNum, 2ndNum, 3rdNum and assign values of 8, 20 and 14 respectfully. Now write a function that compares “num1” and “num2” and 
//      displays the larger value.
//  4.  Write a function that determines whether “num1” is odd or even and displays the
//      result. (Tip: remember the modulus operator %)
//  5.  Next, write a JavaScript conditional statement to sort the three numbers(1stNum, 2ndNum, 3rdNum) from largest to smallest.

1; function convertRandToDollars(amountInRand) {
    const exchangeRateDollars = 0.066; 
    return amountInRand * exchangeRateDollars;
}
function convertRandToEuros(amountInRand) {
    const exchangeRateEuros = 0.058; 
    return amountInRand * exchangeRateEuros;
}
function convertRandToPounds(amountInRand) {
    const exchangeRatePounds = 0.049; 
    return amountInRand * exchangeRatePounds;
}
const amountInRand = 1000;
const amountInDollars = convertRandToDollars(amountInRand);
const amountInEuros = convertRandToEuros(amountInRand);
const amountInPounds = convertRandToPounds(amountInRand);
console.log(`R1000 is approximately $${amountInDollars.toFixed(2)}, €${amountInEuros.toFixed(2)}, and £${amountInPounds.toFixed(2)}.`);

 2; function calculateAmountWithVAT(value) {
    const VAT_RATE = 0.15; // 15% VAT rate
    const amountWithVAT = value + (value * VAT_RATE);
    return amountWithVAT;
  }




  
  const initialAmount = 400;
  const finalAmount = calculateAmountWithVAT(initialAmount);
  
  console.log(`The amount after tax is R${finalAmount.toFixed(2)}`);

3; const Num1 = 8;
const Num2 = 20;
const Num3= 14;

function compareAndDisplayLarger(num1, num2) {
  if (num1> num2) {
    console.log(`${num1} is larger than ${num2}`);
  } else if (num2 > num1) {
    console.log(`${num2} is larger than ${num1}`);
  } else {
    console.log(`${num1} and ${num2} are equal.`);
  }
}

compareAndDisplayLarger(Num1,Num2);

4; function isOddOrEven(num) {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }
  
  const num5= 8; // You can change the value of num1 as needed
  isOddOrEven(num5);

5;     const Num4= 8;
const Num5= 20;
const Num6= 14;

let largest, middle, smallest;

if (Num4>= Num5&& Num4 >= Num6) {
  largest = Num4;
  if (Num5 >= Num6) {
    middle = Num5;
    smallest = Num6;
  } else {
    middle = Num6;
    smallest = Num5;
  }
} else if (Num5 >= Num4 && Num5 >= Num6) {
  largest = Num5;
  if (Num4 >= Num6) {
    middle = Num4;
    smallest = Num6;
  } else {
    middle = Num6;
    smallest = Num4;
  }
} else {
  largest = Num6;
  if (Num4 >= Num5) {
    middle = Num4;
    smallest = Num5;
  } else {
    middle = Num5;
    smallest = Num4;
  }
}

console.log(`Sorted from largest to smallest: ${largest}, ${middle}, ${smallest}`);
