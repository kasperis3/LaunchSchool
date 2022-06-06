// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${this.name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${this.name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${this.name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     let discountedPrice = this.price - discount;
    
//     return discountedPrice;
//   },
// };

// console.log(item.discount(20));   // should return 40
// console.log(item.discount(50));   // should return 25
// console.log(item.discount(25));   // should return 37.5

// function objectsEqual(obj1, obj2) {
//   // check if the sizes are the same first
//   // check element by element 
//   let obj1Keys = Object.keys(obj1);
//   let obj2Keys = Object.keys(obj2);
//   if (obj1Keys.length !== obj2Keys.length) return false;
//   for (let key of obj1Keys.concat(obj2Keys)) {
//     if (obj1[key] !== obj2[key]) return false;
//   }
//   return true;
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse: function(course) {
      this.courses.push(course);
    },
    listCourses: function() {
      console.log(this.courses);
    },
    findCourse: function(code) {
      return this.courses.filter(course => course.code === code)[0];
    },
    addNote: function(code, note) {
      let whichCourse = this.findCourse(code); // what if two classes have same code
      if (whichCourse.note) {
        whichCourse.note += `; ${note}`;
      } else {
        whichCourse.note = note;
      }
    },
    viewNotes: function() {
      let notes = this.courses.filter(course => course.note !== undefined)
                              .map(course => `${course.name}: ${course.note}`);
      console.log(notes.join("\n"));
    },
    updateNote: function(code, note) {
      let whichCourse = this.findCourse(code);
      whichCourse.note = note;
    }
  }
}

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"

function createSchool() {
  return {
    students: [],
    addStudent: function(name, year) {
      if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        console.log("Invalid year");
      } else {
        let student = createStudent(name, year);
        this.students.push(student);
        return student;
      }
    },
    enrollStudent: function(student, course) {
      student.addCourse(course);
    },
    addGrade: function(grade, student, courseCode) {
      let courseToGrade = student.findCourse(courseCode);
      courseToGrade.grade = grade;
    },
    getReportCard: function(student) {
      let studentCourses = student.courses;
      studentCourses.forEach(course => {
        let grade = course.grade ? course.grade : 'In progress';
        console.log(`${course.name}: ${grade}`);
      })
    },
    courseReport: function(courseName) { 
      // report all grades for given Course name by student and the average grade
      let studentsWithCourse = this.students.filter(student => {
        return student.courses.some(course => ((course.name === courseName) && (course.grade)));
      }); // array of Student objects with that couse
      if (studentsWithCourse.length === 0) return;
      
      console.log(`=${courseName} Grades=`)

      let average = studentsWithCourse.reduce((total, student) => {
        let course = student.courses.filter(course => ((course.name === courseName) && (course.grade)))[0];
        console.log(`${student.name}: ${course.grade}`);
        return total + course.grade;
      }, 0) / studentsWithCourse.length;

      console.log("---");
      console.log(`Course average: ${average}`);
    }
  }
}

let school = createSchool();
let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

school.students.forEach(student => {
  school.enrollStudent(student, {name: 'Math', code: 101});
})

school.enrollStudent(foo, {name: 'Advanced Math', code: 102});
school.enrollStudent(qux, {name: 'Advanced Math', code: 102});
school.enrollStudent(foo, { name: 'Physics', code: 202});

school.getReportCard(foo);

school.addGrade(95, foo, 101);
school.addGrade(90, foo, 102);
school.addGrade(91, bar, 101);
school.addGrade(93, qux, 101);
school.addGrade(90, qux, 102);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');




