const bob = {
    name: 'bob',
  sayName: {
    name: 'steve',
    sayName: {
        name: 'fred',
      sayName() {
        console.log(this.name)
      }
    }
  }
}

function sayName() {
    console.log(this)
}

// sayName();

// console.log(bob.sayName);

// console.log(bob.sayName.sayName);

// bob.sayName.sayName.sayName();

(function greetPeople() { // This is a function expression, not a declaration
  console.log("Good Morning!");
});