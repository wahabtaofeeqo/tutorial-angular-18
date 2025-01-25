// Value Types
let name = "Taofeek";
let channel = name;

channel = "Taocoder";

console.log(`The Name is ${name}`);
console.log(`The Channel is ${channel}`);

// Ref Types
let obj = {
    model: 'Toyota',
    year: 2024
}

let car = obj;
car.year = 2025;

console.log('OBJ', obj)

// Reassignment
let num = 10;
num = 20;

let user = {
    name: 'Taofeek'
}

user.name = "Coder";
