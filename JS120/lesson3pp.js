// Practice Problems - Constructors and Prototypes

// Write a constructor function called Circle that takes a radius as an argument. 
// You should be able to call an area method on any objects created by the constructor to get the circle's area. 
let a = new Circle(3);
let b = new Circle(4);

Circle.prototype.area = function() {
	return Math.PI * this.radius * this.radius;
}

function Circle(radius) {
	this.radius = radius;
}

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false



function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

Ninja.prototype.swing = function() {
	this.swung = !this.swung;
	return this;
}

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`

// In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else
let ninjaB = new ninjaA.constructor();


console.log(ninjaA.constructor === ninjaB.constructor) // => true



/* 
Since a constructor is just a function, you can call it without the new operator. 
However, that can lead to unexpected results and errors, especially for inexperienced programmers. 
Write a constructor function that you can use with or without the new operator
*/

function User(first, last) {
  // // ... scope safe constructor (Array and objects are fine, strings are not)
  if (!(this instanceof User)) {
  	return new User(first, last);
  }

  this.name = first + ' ' + last;
  // return this;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe























