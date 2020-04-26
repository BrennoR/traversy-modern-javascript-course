// var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// Can not start with number

// Multi word vars
var firstName = 'John';  // Camel case
var first_name = 'Sara';  // Snake case
var FirstName = 'Tom';  // Pascal case

// LET
let name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// CONST
const newName = 'John';
console.log(newName);
// Can not reassign
// newName = 'Sara';
// Have to assign a value
// const greeting;

const person = {
    name: 'John',
    age: 30
}
// can't reassign person, but can change data inside the object

person.name = 'Sara';
person.age = 32;

console.log(person)

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
// numbers = [1, 2, 3]  <- can't do this

console.log(numbers);
