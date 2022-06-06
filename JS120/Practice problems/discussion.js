class Student {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.classes = [];
  }

  static citizenship = 'Canadian';

  static getHome() {
    return 'home';
  }

  getCitizenship() {
    return Student.citizenship;
  }

  addClass(className) { //It doesn't print this method
    this.classes.push(className);
  }
}

Student.prototype.removeClass = function() { //It prints this method
  this.classes.pop();
}
let mohamad = new Student('Mohamad', 12);

console.log (mohamad.getCitizenship());
mohamad.addClass('Math');
console.log (mohamad.constructor === Student);
console.log (Object.getPrototypeOf(mohamad)); //{ removeClass: [Function (anonymous)]}. It doesn't print the methods I define inside the class.
console.log (typeof Student);

console.log(typeof Student.prototype.removeClass);
console.log(typeof Student.prototype.addClass);
console.log(Student.prototype.propertyIsEnumerable('removeClass'));
console.log(Student.prototype.propertyIsEnumerable('addClass'));

console.log(Student.getHome());