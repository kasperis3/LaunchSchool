// // name property added to make objects easier to identify
// let foo = {name: 'foo'};
// let bar = Object.create(foo);
// bar.name = 'bar';
// let baz = Object.create(bar);
// baz.name = 'baz';
// let qux = Object.create(baz);
// qux.name = 'qux';

// foo.ancestors = function() {
//   let ancestors = [];
//   let self = this;
//   while (Object.getPrototypeOf(self) !== Object.getPrototypeOf({})) {
//   	self = Object.getPrototypeOf(self);
//   	ancestors.push(self.name);
//   }
//   ancestors.push('Object.prototype');
//   console.log(ancestors);
// }


// qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
// baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
// bar.ancestors();  // returns ['foo', 'Object.prototype']
// foo.ancestors();  // returns ['Object.prototype']

// let a = [1,2,3].concat([3,4,5]);

// console.log(a);

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.communicate = function() {
  console.log("Communicating");
}

Person.prototype.eat = function() {
  console.log("Eating");
}

Person.prototype.sleep = function() {
  console.log("sleeping");
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.apply(this, [firstName, lastName, age, gender]);
  this.specialization = specialization;
}

Doctor.prototype = new Person();
Doctor.prototype.constructor = Doctor;
Doctor.prototype.diagnose = function() {
  console.log("Diagnosing");
}

function Student(firstName, lastName, age, gender, degree) {
  Person.apply(this, [firstName, lastName, age, gender]);
  this.degree = degree;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;
Student.prototype.study = function() {
  console.log("Studying");
}

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.apply(this, [firstName, lastName, age, gender, degree]);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = new Student();
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log("Researching");
}

// class Person {
//   constructor(firstName, lastName, age, gender) {
//   	this.firstName = firstName;
//   	this.lastName = lastName;
//   	this.age = age;
//   	this.gender = gender;
//   }
//   fullName() {
//   	return `${this.firstName} ${this.lastName}`;
//   }
//   communicate() {
//   	console.log("Communicating");
//   }
//   eat() {
//   	console.log("Eating");
//   }
//   sleep() {
//   	console.log("Sleeping");
//   }
// }

// class Doctor extends Person {
//   constructor(firstName, lastName, age, gender, specialization) {
//   	super(firstName, lastName, age, gender);
//   	this.specialization = specialization;
//   }
//   diagnose() {
//   	console.log('Diagnosing');
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, age, gender, degree) {
//   	super(firstName, lastName, age, gender);
//   	this.degree = degree;
//   }
//   study() {
//   	console.log(`Studying`);
//   }
// }

// class GraduateStudent extends Student {
//   constructor(firstName, lastName, age, gender, degree, graduateDegree) {
//   	super(firstName, lastName, age, gender, degree);
//   	this.graduateDegree = graduateDegree;
//   }
//   research() {
//   	console.log("Researching");
//   }
// }


let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'


