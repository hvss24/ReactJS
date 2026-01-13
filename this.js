//this in Global Context
// 
// function showThisTraditional(){
//     console.log("Traditional this: "+ this);
// }

// const showThisArrow = ()=>{
//     console.log("Arrow this:"+ this);
// }

// showThisArrow();
// showThisTraditional();

//this is Obj. methods

// const myObject = {
//     name: "Harsh",
//     traditionalMethod: function(){
//         console.log("Traditional method this: "+this.name);
//     },
//     ArrowMethod: ()=>{
//         console.log("Arrow method this: "+this.name);
//     }
// }

// myObject.traditionalMethod();
// myObject.ArrowMethod();


//this method with call, bind or apply

function sayHello(){
    console.log("Hello "+this.name);
}
const person = {
    name: "Harsh"
};

// sayHello.call(person);
// const boundFunction = sayHello.bind(person);

// boundFunction();

const arrowSayHello = ()=>{
    console.log("Hello "+this.name);
}

arrowSayHello.call(person);
