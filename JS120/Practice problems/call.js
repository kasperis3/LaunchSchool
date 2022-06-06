// duplicate call

function call(fn, context, ...args) {
  /* someObj.someMethod(someContext) format of original
	for example, cat.dinner.call(dog, salmon)...here
	the object of type cat has access to a method named dinner which takes one argument
	we will pass the context of dog to the method dinner "borrowed" from the cat prototype (chain)
	in effect, inside the dinner method, any reference to this must point to the dog object context
	together with the arguments supplied, okay the above broken down

	steps:
	-- 1. assign (mix-in) the function to the context object's prototype (is mutating allowed)
	-- 2. invoke the method with ...args
	-- 3. return the result
  */

  context.constructor.prototype.fn = fn;

  console.log(context.constructor.prototype.propertyIsEnumerable('fn')); // because we manipulated the prototype directly

  console.log(Object.keys(context.constructor.prototype)); // only 'fn' shows

  context.constructor.prototype.silence(); // a property of the prototype but not enumerable

  // console.log(Object.getOwnPropertyNames(context.constructor.prototype))

  context.constructor.prototype.fn(...args);

}

class Cat {
  speak() {
  	console.log(`yes ${this.constructor.name} can speak`);
  }
}

class Dog {
  silence() {
  	console.log(`mostly silent cause i'm sleeping`);
  }
}

let kitty = new Cat('tom');
kitty.speak();

// kitty.silence() // TYPE ERROR

let dog = new Dog();
kitty.speak.call(dog);

console.log(kitty.speak);	

call(kitty.speak, dog);



