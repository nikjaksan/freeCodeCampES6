///////////////////////////////////////////////
// Compare Scopes of the var and let Keywords

// var declares variables globally, or locally inside a function
// let behaves similarly, using let to declare a variable inside a block, statement or expression; its scope is limited to that block, statement or expression
var numArrayAlpha = [];
for (var i = 0; i < 3; i++) {
  numArrayAlpha.push(i);
}
console.log(numArrayAlpha); // [0, 1, 2]
console.log(i); // i = 3 since i incremented by 1 after logging 2.
//since i is declared globally with var, i++ updates the global value of i
// the following code is identical in function to the above (utilising j instead of i)
var numArrayBeta = [];
var j;
for (j = 0; j < 3; j++) {
  numArrayBeta.push(j);
}
console.log(numArrayBeta);
console.log(j);

// This behavior will cause problems if you were to create a function and store it for later use inside a for loop that uses the j variable. This is because the stored function will always refer to the value of the updated global j variable.

var printNumTwoAlpha;
for (var k = 0; k < 3; k++) {
  if (k === 2) {
    printNumTwoAlpha = function () {
      return k;
    };
  }
}
console.log(printNumTwoAlpha()); //prints 3
// This is because the value assigned to k was updated and the printNumTwo() returns the global k and not the value k had when the function was created in the for loop.
// let does not follow this behaviour
let printNumTwoBeta;
for (let l = 0; l < 3; l++) {
  if (l === 2) {
    printNumTwoBeta = function () {
      return l;
    };
  }
}
console.log(printNumTwoBeta()); //displays l = 2
// console.log(l); >> undefined
// l is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwoBeta() returned the correct value because three different l variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.

//////////////////////////////////////////////
// Mutate and array declared with const
// Some developers prefer to assign all their variables using const by default, unless they know they will need to reassign the value. Only in that case, they use let.
// However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
// this means we can change the values inside the array, however we cannpt redifine the entire array ie. change the value assigned to the variable identifier
const s = [5, 6, 7];
// s = [1, 2, 3]; >> cannot reassign variable identifier "s" to new array/value
s[2] = 45; //we can however alter the existing values inside the array
console.log(s); // logs array [5,6,45]
// Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.

//////////////////////////////////////////////
//Prevent Object Mutation
//JavaScript provides a function Object.freeze to prevent data mutation.
let obj = {
  name: "freeCodeCamp",
  review: "Awesome",
};
obj.review = "Bad"; //redefine review as bad
console.log(obj);

Object.freeze(obj); //freezing obj object so it cannot be mutated
obj.review = "Average"; //will not work
console.log(obj); //won't contain updated review data

//////////////////////////////////////////////
// Use Arrow Functions to Write Concise Anonymous Functions
// anonymous functions == inline functions
// we don't need to name them since they won't be referenced elsewhere in the script

const myFuncAlpha = function () {
  const myVar = "value";
  return myVar;
}; //function declaration
// simplified using arrow function format
myFuncBeta = () => (myVar = "sceptum");
console.log(myFuncBeta());

// Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.
var magicAlpha = function () {
  return new Date();
};

// my solution
const magicBeta = () => new Date();

console.log(magicBeta());

//////////////////////////////////////////////
// Writing arrow functions with multiple parameters
// If an arrow function contains only one parameter, we forego the parenthesis surrounding the parameter.
// If an arrow function only has one line of executable code, we forego curcly brackets and the return statement

// standard function expression
const multiplierAlpha = function (item, multiplier) {
  const calculation = item * multiplier;
  return calculation;
};
console.log(multiplierAlpha(1, 2));

// arrow function
const multiplierBeta = (item, multiplier) => item * multiplier;
console.log(multiplierBeta(1, 2));

//////////////////////////////////////////////
// Set default parameters for your functions
// If no argument is used when a function is called, we can set a default argument to fill its place
const greeting = (name = "Anonymous") => "Hello " + name;
// This function will return the string "Hello Anonymous" if no argument is specified, ie. argument is undefined
console.log(greeting("John"));
console.log(greeting());

//////////////////////////////////////////////
// The rest parameter in Functions
// In the quest to create flexible functions, we can utilise the rest parameter. This enables us to create a function with an undefined amount of parameter values. Basically we use the "...args" statement in our parameter's place, and this let's us call the function with as many arguments as we want.

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); //3 arguments
console.log(howMany("string", null, [1, 2, 3], {})); //4 arguments with different datatypes

// Bonus: the .reduce() method
// The .reduce() method takes 2 arguments, a callback function and an initial value (set to 0 since we are calculating the sum of an array)
// The callback function takes 2 arguments, the accumulator and the currentValue
// improve this function
const sumAlpha = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};
console.log(sumAlpha(1, 2, 3)); //output 6

const sumBeta = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sumBeta(1, 2, 3));

////////////////////////////////////////////////
// Use the Spread Operator to Evaluate Arrays In-Place

// When multiple parameters or elements are expected, the spread operator enables expansion of things like arrays
// In the following example we want to find the largest value provided, the array is of an incorrect value type so the Math.max() operation won't work since .max() expects arguments that are numbers seperated by commas
let arr = [6, 89, 3, 45];
let maximus = Math.max(arr);
console.log(maximus); //Returns NaN

// We can take two paths to convert our array into the correct datatype:

// Using apply,
// we need to define which object it is referring to (use null since no specific object is being referenced) for the first argument.
// The second argument is our array
let maximusApply = Math.max.apply(null, arr);
console.log(maximusApply);

// Using the spread method to unpack an array,
// A quick solution that can only be used as an argument or an array literal
// Use the ellipses (...) to achieve this
let maximusSpread = Math.max(...arr);
console.log(maximusSpread);

// Example: use the spread method to take arr1's content and append it to arr2
let arrAlpha = ["Jan", "Feb", "March", "April", "May", "June"];
let arrBeta;

arrBeta = [...arrAlpha];
console.log(arrBeta);

// practise
// append one array to another

let arrGamma = [1, 2, 3, 4];
let arrDelta = [5, 6, 7, 8];

arrDelta.unshift(...arrGamma);
console.log(arrDelta);

// pass an array into a function
let addNumbers = (x, y, z) => console.log(x + y + z);
let numbersArr = [1, 2, 3];
addNumbers(...numbersArr);

// copy arrays
let arrEpsilon = [1, 2, 3];
let arrZeta = [...arrEpsilon];
console.log(arrEpsilon, arrZeta);
// note: arrEpsilon and arrZeta are two seperate arrays ie. they are not referencing the same array
arrZeta.push(4);
console.log(arrEpsilon, arrZeta);
