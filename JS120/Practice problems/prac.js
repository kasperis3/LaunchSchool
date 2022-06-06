let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetingsWithin: function() {
  	let bar = function() {
  	  console.log(`${this.firstName} ${this.lastName}`);
  	}.bind(this);

  	bar();
  },
  greetings: function() {
  	console.log(`${this.firstName} ${this.lastName}`);
  }.bind(this), // this execution context is global!!!
};


console.log(this);

john.greetingsWithin(); // this IS part of the function definition

john.greetings();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar.call(this);
  },
};

obj.foo();        // => undefined undefined