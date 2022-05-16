// lesson4more.js

function Mammal() {}

let m = new Mammal();

console.log(m.__proto__ === Mammal.prototype);

Mammal.prototype.breathe = function() {}

function Cat() {}

Cat.prototype = new Mammal();

let garfield = new Cat();

console.log(garfield instanceof Cat);

console.log(garfield.constructor)

Cat.prototype.constructor = Cat;

console.log(garfield.constructor)

console.log(garfield.__proto__ === Cat.prototype);

console.log(garfield["constructor"])