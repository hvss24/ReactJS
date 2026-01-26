let numbers = [1,2,3,4,5];

let numbers2 = numbers.forEach((val, index)=>{
    val = val*2;
    console.log(index,val);
});

console.log(numbers);
