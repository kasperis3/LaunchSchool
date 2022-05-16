// random1.js

// console.clear()

function Mammal() {
	this.name = 'Mammal';
}

Mammal.prototype.breathe = function() {
	console.log(`my constructor ${this.constructor} who made ${this.name} is breathing...`)
}

console.log(Mammal.prototype);

// console.log(Mammal.__proto__);

// console.log(Object.getPrototypeOf(Mammal));

let cat = new Mammal();

console.log(cat);

console.log(cat.prototype);

console.log("up up and away")

console.log(cat.__proto__ === Mammal.prototype);

console.log(this);

function Cat() {
	this.name = 'Cat';
};

Cat.prototype = new Mammal();

cat.breathe();

let garfield = new Cat();

garfield.breathe();

console.log(Cat.prototype);

console.log(Cat.prototype.constructor);

let cat_cat = new Cat();

console.log(cat_cat instanceof Cat)

console.log(cat_cat instanceof Mammal)

console.log(cat_cat instanceof Reptile)

function Reptile() {};

Cat.prototype.constructor = Cat;

console.log(Cat.prototype);

console.log(Cat.prototype.constructor);

console.log(cat_cat instanceof Cat)

console.log(cat_cat instanceof Mammal)

console.log(cat_cat instanceof Reptile)

console.log(Cat.prototype.isCat);

console.log(Object.__proto__)