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

// // Your tasks:

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

/////////////////////////////////////////////////
// Coding Challenge #2
/////////////////////////////////////////////////
//Your tasks:

//1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} accelerated to ${this.speed} mph`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} braked to ${this.speed} mph`);
  }

  get speedUK() {
    return `${this.make}'s speed in UK is ${this.speed * 1.6}`;
  }

  set speedUK(speed) {
    this.speed = speed * 1.6;
  }
}
const yourCar = new CarCl('Honda', 40);
yourCar.accelerate();
yourCar.accelerate();
yourCar.brake();

// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
console.log(yourCar.speedUK);

// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
yourCar.speedUK = 10;
console.log(yourCar.speed);
