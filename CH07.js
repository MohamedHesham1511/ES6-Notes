//✤===================== CH7-VID01 "Class Implementation" =====================✤//
//✤===================== CH7-VID02 "Function Overriding" =====================✤//

//➜ 1... javascript is classless, doesn't has "class".
//➜      but in ES6 they gave as "class" keyword as syntactic sugar to create class.

//✱  Example:  structure of class using "class" keyword.

class className {
  //# constructor using 'constructor' keyword.
  constructor(_p1, _p2) {
    this.p1 = _p1;
    this.p2 = _p2;
  }
  //# properties getters & setters using "get" & "set" keywords.
  get p1() {
    return this.p1;
  }
  set p1(value) {
    this.p1 = value;
  }
  //# static function declaration using "static" keyword.
  static staticFn() {
    return;
  }
  //# static prop/method declaration.
  static get staticprop() {
    return;
  }
}
//✱===========================================================✱//

//✱  Example:  creating simple "Person" class.
// Todo  1. create class "Person" using class keyword.
class Person {
  // Todo 2. defining property with initial value without using constructor.
  _address = '123 st.';
  // Todo  2. create our default constructor method with default values in case no arguments sent.
  constructor(personName = 'Ali', personAge = 10) {
    this._personName = personName; // As naming convension we agreed if we want to make "personName" private to add "_" before it.
    this._personAge = personAge; // As naming convension we agreed if we want to make "personAge" private to add "_" before it.
  }

  // Todo  3. create getter method for "personName" property.
  get personName() {
    return this._personName;
  }
  // Todo  4. create a setter method for "personName" property.
  //»  Note:  _personName property will not be editable unless we created a setter method for.
  set personName(value) {
    this._personName = value;
  }

  // Todo  5. creating static prop using "static" keyword.
  //»  Note:  static members will be accessable using the class name only.
  static get staticProp() {
    return 'this is a static prop';
  }

  // Todo  6. creating member method "displayInfo" which is accessable for our object.
  displayInfo() {
    return `this is ${this._personName} of age ${this._personAge}`;
  }

  // Todo  7. overriding "toString()" parent prototype method.
  toString() {
    return `I'm ${this._personName} lives in ${this._address} of age ${this._personAge}`;
  }
}
// Todo 8. creating a method on the Person prototype.
Person.prototype.displayAddress = function () {
  return this._address;
};

var me = new Person();
console.log(me._address); //123 st.
console.log(me._personName); //Ali
console.log(me._personAge); //10

console.log(me.personName); //Ali
me.personName = 'Mohamed';
console.log(me.personName); //Mohamed

console.log(Person.staticProp); //'this is a static prop'

console.log(me.displayInfo()); // "this is Mohamed of age 10"
console.log(me.toString()); // "I'm Mohamed lives in 123 st. of age 10"
console.log(me.displayAddress()); // "123 st."
//✱===========================================================✱//
//✤====================================================================✤//

//✤===================== CH7-VID03 "Using of extends and super in inheritance" =====================✤//

//➜ 1... to make child class inherit from a parent class in ES6 we use "extends" keyword.

//✱  Example:  creating class "User" which will inherit from class "Person".
// Todo 1. defining the class "User" with "extends" keyword.
class User extends Person {
  //Todo 2. creating the "User" class constructor method.
  constructor(name, age, job, title, salary) {
    //Todo 3. calling the parent constructor. (in this case it's Person constructor method)
    super(name, age);
    this._job = job;
    this._title = title;
    this._salary = salary;
  }

  //Todo 4. implementing "toString()" function to override the parent "toString()" function.
  //»  Note:  this is an example of function overriding.
  toString() {
    return `${super.toString()} working as ${this._job} and my salary is ${
      this._salary
    }`;
  }
}

var UserPerson = new User('Nour', 25, 'programmer', 'engineer', 2000);

console.log(UserPerson._address); //"123 st."
console.log(UserPerson._personAge); //25
console.log(UserPerson._personName); //"Nour"
console.log(UserPerson.toString()); //"I'm Nour lives in 123 st. of age 25 working as programmer and my salary is 2000"

//✱=====================================================================✱//
//✤==================================================================================================================✤//

//✤===================== CH7-VID04 "Private members using Symbol" =====================✤//
//✤===================== CH7-VID05 "Private members using # sign" =====================✤//

//➜ 1... we could create private property using Symbol primitive data type.

//✱  Example:  creating private members using "Symbol".

// Todo 1. create a symbol.
let phoneNumber = Symbol();
class Person {
  constructor(name = 'Ali', age = 10, phone = 01110452145) {
    this._personName = name;
    this._personAge = age;
    // Todo 2. create new property using the symbol created above.
    this[phoneNumber] = phone;
  }
}

var me = new Person();
console.log(me.phoneNumber); //undefined
console.log(me[phoneNumber]); //01110452145

//✱=====================================================================✱//

//➜ 2... we could also create private member using "#" sign.
//✱  Example:  creating private members using "#" sign.
class Person {
  // Todo 1. we should start our private member name with "#" and define them before the constructor.
  //»  Note:  this private property will only be accessed inside our class.
  #_address = '123 st.';
  #fun = function () {
    return `this is a private method`;
  };
  constructor(name = 'Ali', age = 10) {
    this._personName = name;
    this._personAge = age;
  }

  toString() {
    return `I'm ${this._personName} lives in ${this.#_address} of age ${
      this._personAge
    }`;
  }

  displayAddress() {
    return this.#_address;
  }
}
var me = new Person();
console.log(me.toString()); //"I'm Ali lives in 123 st. of age 10"
console.log(me.displayAddress()); //"123 st."
//✱=====================================================================✱//

//➜ 3... in ES6 we could create static members using "static" keyword.
//✱  Example:  creating static members using "static" keyword.

class Person {
  // Todo 1. defining static memeber using "static" keyword.
  //»  Note:  static memebers could only be accessed using className only.
  static locationInfo = 'cairo';

  // Todo 2. defining static method using "static" keyword.
  //»  Note:  "this" here refers to the class Person.
  static classInfo = function () {
    return 'this is static method';
  };
  constructor(name = 'Ali', age = 10) {
    this._personName = name;
    this._personAge = age;
  }
}
console.log(Person.locationInfo); //"cairo"
Person.locationInfo = 'Alex';
console.log(Person.locationInfo); //"Alex"
console.log(Person.classInfo()); //"this is static method"
//✱=====================================================================✱//

//✤======================================================================================✤//
