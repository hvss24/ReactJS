// function exampleFunction() {
//   var localVar = "I am local to the function";
//   console.log(localVar); // Works
// }
// exampleFunction();
// console.log(localVar); // Throws ReferenceError: localVar is not defined



var globalVar = "I am global";

function exampleFunction() {
  console.log(globalVar); // Works, accesses the global variable
}

exampleFunction();
console.log(globalVar); // Works
