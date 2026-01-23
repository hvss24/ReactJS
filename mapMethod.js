// let numbers = [2,4,6,8];
// let halfNumbers = numbers.map(n => n/2);
// console.log(halfNumbers);
// console.log(numbers);


let object = [{
    name: "Harsh",
    city: "Ballia",
    email: "sisodiyaharshvardhan999@gmail.com"
}, {
    name:"Ayush",
    city:"sultanpur",
    email: "ayu789@gmail.com"
}];

let newObject = object.map(obj=>({
    username: obj.name,
    userCity: obj.city,
    usermail: obj.email
}));

console.log(newObject);
console.log(object);