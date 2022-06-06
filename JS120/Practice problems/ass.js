// // let cat = {
// //   name: 'Fluffy',
// // };

// // function purr() {
// //   console.log(`${this.name} is purring...`);
// // }

// // // purr.call(cat);

// // // console.log(global);

// // purr();

// let contacts = {
//   list: [],
//   add(name, gender) {
//     let contact = new Contact(name, gender);
//     this.list.push(contact);
//     // console.log(this.list);
//   },
//   males() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'male';
//      });
//   },
//   females() {
//     return this.list.filter(function(contact) {
//       return contact.gender === 'female';
//     });
//   },
//   filterByName(name) {
//     return this.list.filter(function(contact) {
//       return contact.hasName(name);
//     });
//   },
// };

// function Contact(name, gender) {
//   this.name = name;
//   this.gender = gender;
// }

// Contact.prototype.hasName = function(name) {
//   return this.name === name;
// }

// // class Contact {
// //   constructor(name, gender) {
// //   	this.name = name;
// //   	this.gender = gender;
// //   }
// //   hasName(name) {
// //   	return this.name === name;
// //   }
// // }

// contacts.add('Sam', 'male');
// contacts.add('Sammy', 'female');
// contacts.add('Samitha', 'female');
// contacts.add('Samantha', 'female');
// contacts.add('Samuel', 'male');
// contacts.add('Sample', 'male');

// console.log(contacts.list[0] instanceof Contact);

// console.log(contacts.filterByName('Sam'))


// // let plane = {
// //   passengers: 220
// // };

// // let flyingMachine = {
// //   fly() {
// //     console.log(`Off we go with ${this.passengers} passengers!`);
// //   }
// // };

// // Object.assign(plane, flyingMachine);

// // plane.fly();

class Employee {
  constructor(name, serialNumber, fullTime) {
    this.name = name; 
    this.serialNumber = serialNumber;
    this.fullTime = fullTime; // boolean true or false if part-time (only 2 options)
    this.vacationDays = 0;
    this.deskType = 'open workspace';
  }
  info() {
  	console.log(`${this.name} works ${this.fullTime ? 'full time' : 'part time'} and has ${this.vacationDays} vacation days left`);
  	console.log(`${this.name} has this kind of desk: ${this.deskType}`);
  }
}

class Manager extends Employee {
  constructor(name, serialNumber) {
    super(name, serialNumber, true);
    this.vacationDays = 14;
    this.deskType = 'private office';
  }
  delegate() {
    // STUB
  }
}

class Executive extends Manager {
  constructor(name, serialNumber) {
    super(name, serialNumber);
    this.vacationDays = 20;
    this.deskType = 'corner office'
  }
  fire() {
    // STUB
  }
  hire() {
    // STUB
  }
}

class Regular extends Employee {
  constructor(name, serialNumber) {
    super(name, serialNumber, true);
    this.vacationDays = 10;
    this.deskType = 'regular desk'
  }
  takeVacation() {
    // STUB
  }
}

let john = new Employee('john', '0', false); // part time
let miguel = new Manager('miguel', '1');
let jose = new Executive('jose', '2');
let figuero = new Regular('figuero', '3');

john.info();
miguel.info();
jose.info();
figuero.info();


