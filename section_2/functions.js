// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
    // if (typeof firstName === 'undefined') {firstName = 'John'}
    // if (typeof lastName === 'undefined') {firstName = 'Doe'}
    // console.log('Hello');
    return `Hello ${firstName} ${lastName}`;
}

// console.log(greet('Steve', 'Smith'));

// FUNCTION EXPRESSIONS
const square = function (x) {
    return x * x;
};

console.log(square(8));

// IMMEDIATELY ENVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function() {
//     console.log('IFFE Ran...');
// })();

(function(name) {
    console.log('Hello ' + name);
})('Brad');

// PROPERTY METHODS
const todo = {
    add: function() {
        console.log('Add todo..');
    },
    edit: function(id) {
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function() {
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();