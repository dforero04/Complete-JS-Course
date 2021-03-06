'use strict';

// /////////////////////////////////////////////////
// // OOP in JS
// /////////////////////////////////////////////////
// // - There are 3 ways to use OOP in JS
// //  -- Constructor Functions
// //      -- Technique to create objects from a function
// //      -- This is how built-in objects like Arrays, Maps, or Sets are actually implemented
// //  -- ES6 Classes
// //      -- Modern alternative to constructor function syntax
// //      -- "Syntactic sugar": behind the scenes, ES6 classes work exactly like constructor functions
// //      -- ES6 classes do NOT behave like classic OOP
// //  -- Object.create()
// //      -- The easiest and most straightforward way of linking an object to a prototype object
// /////////////////////////////////////////////////

// /////////////////////////////////////////////////
// // Constructor Functions
// /////////////////////////////////////////////////
// const Person = function (firstName, birthYear) {
//   // Instance Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// // 1. New object{} is created
// // 2. Function is called, this = obj{}
// // 3. new obj{} linked to prototype
// // 4. function automatically returns obj{}
// // ** This is how it works for both constructor functions and ES6 classes **
// const daniel = new Person('Daniel', 1992);
// console.log(daniel);
// console.log(daniel instanceof Person);

// /////////////////////////////////////////////////
// // Prototypes
// // - You never add methods onto the constructor function!
// // - Add methods in the below manner, using prototypes:
// /////////////////////////////////////////////////
// Person.prototype.calcAge = function () {
//   const now = new Date();
//   console.log(now.getFullYear() - this.birthYear);
// };
// // Prototypal Inheritance / Delegation
// daniel.calcAge();
// // - basically step 3 above
// console.log(daniel.__proto__);
// // Protoype Chain
// // daniel object ---> Person.prototype ---> Object.prototype ---> null
// console.log(daniel.__proto__ === Person.prototype);

// const krisina = new Person('Krisina', 1996);
// const kalina = new Person('Kalina', 2022);
// krisina.calcAge();
// kalina.calcAge();

// /////////////////////////////////////////////////
// // Coding Challenge #1
// /////////////////////////////////////////////////

// Your tasks:

// // 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// // 'speed' property. The 'speed' property is the current speed of the car in
// // km/h
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// const myCar = new Car('Toyota', 50);

// // 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// // and log the new speed to the console
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} accelerated to ${this.speed}`);
// };
// myCar.accelerate();

// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// // the new speed to the console
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} braked to ${this.speed}`);
// };
// myCar.brake();

// // 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// // 'brake' multiple times on each of them
// // Test data:
// // Data car 1: 'BMW' going at 120 mph
// // Data car 2: 'Mercedes' going at 95 mph
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();

// /////////////////////////////////////////////////
// // ES6 Classes
// // - Class are NOT hoisted (cannot be used before declaration)
// // - Classes are first-class (can be passed into functions and returned from functions)
// // - Classes are executed in strict mode
// /////////////////////////////////////////////////
// // // Class Expression
// // const PersonCl = class {};

// // Class Declaration
// class PersonClass {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   // Methods will be added to .prototype property
//   calcAge() {
//     const now = new Date();
//     console.log(now.getFullYear() - this.birthYear);
//   }
// }

// const brian = new PersonClass('Brian', 1989);
// console.log(brian);
// brian.calcAge();

// /////////////////////////////////////////////////
// // Getters and Setters
// /////////////////////////////////////////////////

// const account = {
//   owner: 'Daniel',
//   transactions: [100, 200, 300],
//   get recentTrans() {
//     return this.transactions.slice(-1).pop();
//   },

//   set recentTrans(tran) {
//     this.transactions.push(tran);
//   },
// };

// console.log(account.recentTrans);

// account.recentTrans = 400;
// console.log(account.transactions);

// class Dog {
//   constructor(name, breed, age) {
//     this.name = name;
//     this.breed = breed;
//     this.age = age;
//   }

//   get breed() {
//     return this._breed;
//   }

//   // Convention used when trying to set a propoerty that already exists (use underscore)
//   set breed(newBreed) {
//     this._breed = newBreed;
//   }

//   static bark(name) {
//     console.log(this);
//     console.log(`${name} is barking!`);
//   }
// }

// const roo = new Dog('Roo', 'Sheperd', 3);
// console.log(roo);

// /////////////////////////////////////////////////
// // Static Methods & Properties
// // - Methods or properties that must be called on the object, not the instance
// /////////////////////////////////////////////////

// // Does not work
// // roo.bark(this.name);

// // You must call a static method from the Object
// Dog.bark(roo.name);

// /////////////////////////////////////////////////
// // Object.create()
// // - Creates a new object and manually sets the prototype of the object to any other object
// // - Least used way in industry
// /////////////////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const angie = Object.create(PersonProto);
// console.log(angie);
// angie.name = 'Angie';
// angie.birthYear = 1991;
// angie.calcAge();
// console.log(angie.__proto__ === PersonProto); // true

// const lou = Object.create(PersonProto);
// lou.init('Lou', 1961);
// lou.calcAge();

// /////////////////////////////////////////////////
// // Coding Challenge #2
// /////////////////////////////////////////////////
// //Your tasks:

// //1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} accelerated to ${this.speed} mph`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} braked to ${this.speed} mph`);
//   }

//   get speedUK() {
//     return `${this.make}'s speed in UK is ${this.speed * 1.6}`;
//   }

//   set speedUK(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const yourCar = new CarCl('Honda', 40);
// yourCar.accelerate();
// yourCar.accelerate();
// yourCar.brake();

// // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// // by 1.6)
// console.log(yourCar.speedUK);

// // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// // converts it to km/h before storing the value, by multiplying the input by 1.6)
// yourCar.speedUK = 10;
// console.log(yourCar.speed);

// /////////////////////////////////////////////////
// // Inheritance Between "Classes": Constructor Functions
// /////////////////////////////////////////////////

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(new Date().getFullYear() - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Must be done before adding anything to Student.prototype because
// // it would override.
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I am taking ${this.course}`);
// };

// const student1 = new Student('Daniel', 1992, 'CS101');
// student1.introduce();
// student1.calcAge();
// console.log(student1);

// /////////////////////////////////////////////////
// // Coding Challenge #3
// /////////////////////////////////////////////////

// // Your tasks:
// // 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// // "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// // current battery charge in % ('charge' property)
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} accelerated to ${this.speed}`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} braked to ${this.speed}`);
// };

// const ElectricCar = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // 2. Implement a 'chargeBattery' method which takes an argument
// // 'chargeTo' and sets the battery charge to 'chargeTo'
// ElectricCar.prototype = Object.create(Car.prototype);
// ElectricCar.prototype.constructor = ElectricCar;

// ElectricCar.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// // 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// // and decrease the charge by 1%.
// ElectricCar.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} accelerated to ${this.speed}, with charge of ${this.charge}`
//   );
// };

// // 4. Create an electric car object and experiment with calling 'accelerate',
// // 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// // you 'accelerate'! Hint: Review the definiton of polymorphism ????
// const tesla = new ElectricCar('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(75);
// console.log(tesla);
// tesla.accelerate();
// console.log(tesla);

// /////////////////////////////////////////////////
// // Inheritance Between "Classes": ES6 Classes
// /////////////////////////////////////////////////

// class PersonClass {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     const now = new Date();
//     console.log(now.getFullYear() - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey, my name is ${this.firstName}`);
//   }

//   get age() {
//     return new Date().getFullYear() - this.birthYear;
//   }

//   set firstName(name) {
//     this._firstName = name;
//   }

//   get firstName() {
//     return this._firstName;
//   }

//   static hey() {
//     console.log('Hey there!');
//   }
// }

// class StudentClass extends PersonClass {
//   constructor(firstName, birthYear, course) {
//     // This super() call must have first
//     super(firstName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.firstName} and I am taking ${this.course}`);
//   }
//   calcAge() {
//     console.log(`I am ${this.age} years old.`);
//   }
// }

// const studentDan = new StudentClass('Dan', 2010, 'CS301');
// studentDan.introduce();
// studentDan.calcAge();
// console.log(studentDan);

// /////////////////////////////////////////////////
// // Inheritance Between "Classes": ES6 Classes
// /////////////////////////////////////////////////

// const PersonProto = {
//   calcAge() {
//     console.log(new Date().getFullYear() - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const p1 = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I am taking ${this.course}`);
// };

// const stud1 = Object.create(StudentProto);
// stud1.init('John', 1996, 'BUS101');
// stud1.introduce();
// stud1.calcAge();
// console.log(stud1);

/////////////////////////////////////////////////
// Encapsulation: Protected and Private Properties and Methods
// NOTE: These features are not yet fully implemented into JS yet
// NOTE: Each of the private and public fields and methods can also be static
/////////////////////////////////////////////////

class Account {
  // Public fields (on each instance)
  locale = navigator.language;

  // Private fields
  #transactions = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // Protected Props
    // Just a known convention to not display this prop to the user
    // Identified with an _
  }

  // Public methods
  deposit(val) {
    this.#transactions.push(val);
  }

  withdrawal(val) {
    this.deposit(-val);
  }

  //   requestLoan(val){
  //     if(#approveLoan()) this.deposit(val)
  //   }

  // Private methods
  // Still not yet implemented
  //   #approveLoan() {
  //     return true;
  //   };
}

const acc1 = new Account('Daniel', 'USD', 1234);
console.log(acc1);
acc1.deposit(500);
acc1.withdrawal(250);
console.log(acc1);
// Will not display because it is private
// console.log(acc1.#transactions);
// console.log(acc1.#pin);

/////////////////////////////////////////////////
// Method Chaining in a custom Object
// - You must return the object (this) in each method that you want to be chainable
/////////////////////////////////////////////////
