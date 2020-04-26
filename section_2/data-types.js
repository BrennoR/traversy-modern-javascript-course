// Primitive data types:
// Stored directly in the location the variable accesses
// Stored on the stack

// Reference data types:
// Accessed by reference
// Objects that are stored on the heap
// A pointer to a location in memory

// 6 primitive data types:
//  - String
//  - Number
//  - Boolean
//  - Null
//  - Undefined
//  - Symbols (ES6)

// Reference data types:
//  - Arrays
//  - Object literals
//  - Functions
//  - Dates
//  - etc...

// JS is a dynamically typed language

// PRIMITIVE

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
// Date
const today = new Date();
console.log(today);
console.log(typeof today);