//name the constructor

console.log(typeof "Hello");
console.log([1,2,3].constructor.name);
console.log(typeof {name: 'Srdjan'});

//create an empty class called cat
class Cat {
	
}


let arr = [1, 2, 3];
for (let key in arr) console.log(key);
// console.log(arr.hasOwnProperty('length'));
// console.log(Object.keys(arr));

//write a function that searches prototype chain of an object for given property and assigns it a new value
function assignProperty(object, property, newValue) {
	console.log('start');
	while (object) {
		console.log('enter loop');
		object = Object.getPrototypeOf(object);
		if (object && object.hasOwnProperty(property)) {
			object[property] = newValue;
			break;
		}
	}
}


let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);


assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false


let a = Object.create(null);
console.log(a);


// practice problem

let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};


console.log(bar.add.call(foo));

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func;
  console.log(returnVal.call(context));
}

logReturnVal(turk.getDescription, turk);

foo = {
  a: 0,
  incrementA: function() {
  	let self = this;
    function increment() {
      self.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);



let greetings = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  evening: 'Good evening, ',

  greeting: function(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buenas noches, '
};

let spanishGreeter = greetings.greeting.bind(spanishWords);

spanishGreeter('Jose');
spanishGreeter('Juan');











