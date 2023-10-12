let name = 'Sathwik';
let num = 100;
num = '9'
console.log(name);
console.log(typeof(num));

let testObject = { name: 'Sathwik',
                    for: 'Interview'};

console.log(testObject.for);    

let arrayForColors = ['blue','black'];
console.log(arrayForColors[2]);
console.log(typeof(arrayForColors));
console.log(arrayForColors.length);

function greet(name,lastName){
console.log('Hello '+name+' '+lastName);
}

greet('Sathwik','Reddy');
greet('Dude');


//Function calculating a value
function square(number){
    return number*number;
}

let number = square(3);
console.log(number);

//names cannot be reserved keywords
//should be meaningful/descriptive
//cannot start from numbers
//cannot contain space or hyphen
//camelNotation(First letter of first word is lower case, first letter of every word after that is uppercase)
//case sensitive


//LET is better than VAR
//CONST to create constants
//Primitives/Reference Types
//Primitives are below
//String
//numbers
//booleans
//undefined
//null
//ReferenceTypes are below
//objects
//arrays
//functions

//objects below
// {} - curly braces are object literal
// we can add one or more key value pairs, key are properties of object
//let testObject = { name: 'Sathwik',
//for: 'Interview'};
//dot notation, testObject.name = 'New name'
//bracket notation, testObject['name] = 'New name'

//Dynamic Languages are where type of variable can change at runtime

//Array size is also dynamic in javascript
//JS Array can hold different types of values
//Arrays are objects, so it will have properties that can be accessed

