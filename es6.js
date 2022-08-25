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
