// let numbers= [1,2,3,4,5];

// const sum = numbers.reduce((accumulator, currentValue)=>accumulator+currentValue, 0);

// console.log(sum);


const words = ["apple", "banana", "cherry", "watermelon", "kiwi"];

const longestword = words.reduce((accumulator, currentValue)=>{
    if(currentValue.length>accumulator.length){
        accumulator = currentValue;
    }
    return accumulator;
}, "");

console.log(longestword);