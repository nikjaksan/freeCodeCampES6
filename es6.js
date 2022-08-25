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
console.log(l); // undefined
// l is not defined because it was not declared in the global scope. It is only declared within the for loop statement. printNumTwoBeta() returned the correct value because three different l variables with unique values (0, 1, and 2) were created by the let keyword within the loop statement.
