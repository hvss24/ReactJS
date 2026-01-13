// const name = "Harshvardhan Singh Sisodiya";
// console.log(name);
// name = "Manni";//error due to reassignment to const variable

// const arr = [1,2,3,4,5];
// console.log(arr);
// arr.push(6);// Array can be mutate
// console.log(arr);
// arr = [5,6];
// console.log(arr); //But Array cannot be reassigned. so, error.

const obj = {name : "Harsh"};
console.log(obj.name);
obj.name= "Manni";
console.log(obj.name); // object can mutate
obj = {name: "Harsh"};
console.log(obj.name);//but, objects cannot be reassigned. so, error.
