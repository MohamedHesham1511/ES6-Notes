//✤============ CH03-VID01 "String API improvement" =============✤//
//➜ 1... "API" means that we are talking about an object and it has its own "properties" and "methods".

//• "trim()" function : remove white characters.
//✱  Example:  using "trim()" string method.
var myStr = '   welcome to JavaScript World   ';
console.log(myStr.trim()); //"welcome to JavaScript World"
console.log(myStr.trimRight()); //"   welcome to JavaScript World"
console.log(myStr.trimLeft()); //"welcome to JavaScript World   "
//✱==============================================================✱//

//• "startsWith()" function : checks if the string starts with a specific pattern.
//✱  Example:  using "startsWith()" string method.
var newStr = new String('JavaScript String Object');
console.log(newStr.startsWith('Ja')); //true
//✱==============================================================✱//

//• "endsWith()" function : checks if the string ends with a specific pattern.
//✱  Example:  using "endsWith()" string method.
var newStr = new String('JavaScript String Object');
console.log(newStr.endsWith('t')); //true
//✱==============================================================✱//

//• "includes()" function : checks if the string includes specific pattern/character.
//✱  Example:  using "includes()" string method.
var newStr = new String('JavaScript String Object');
console.log(newStr.includes('ing')); //true
//✱==============================================================✱//

//• "repeat()" function : to repeat my string several times.
//✱  Example:  using "repeat()" string method.
var newStr = new String('JavaScript String Object');
console.log(newStr.repeat(3)); //"JavaScript String ObjectJavaScript String ObjectJavaScript String Object"
//✱==============================================================✱//

//➜ 2... Other "String" class methods.
//• class method means that it only could be access using the className. (String)
String.fromCodePoint(97); //"a"
String.fromCodePoint(65); //"A"
String.fromCodePoint(65, 97, 66); //"AaB"
//✤====================================================================✤//

//✤============ CH03-VID02 "String template" =============✤//
//➜ 1... String template : using backticks (``).
//✱  Example:  using string template.

var newStr = new String('JavaScript String Object');
console.log(`this is a custom string ${newStr}`); //"this is a custom string JavaScript String Object"
//✱==============================================================✱//
//✤====================================================================✤//

//✤============ CH03-VID03 "String.raw" =============✤//

//➜ 1... "String.raw" ia a class method which deals with string template and it ignores any scaping characters.
//✱  Example:  using "String.raw".

let username = 'ali';
String.raw`Hello \n \t ${username}`; //"Hello \\n \\t ali"
console.log(`Hello \n \t ${username}`);
//Hello
//     ali
//»  Note:  "\t" makes tab.
//✱==============================================================✱//
//✤====================================================================✤//

//✤============ CH03-VID04 "Tagged Template" =============✤//

//➜ 1... Tagged Template : parsing string template with calling function.
//✱  Example:  using "Tagged Template".
function fun(strings, ...values) {
  //# "strings" is an [] which contains all sent string values.
  //# "values" is an [] which contains all templates sent. ==> ${}
  let str = '';
  for (let i = 0; i < strings.length; i++) {
    str += strings[i];
    if (values[i]) {
      str += values[i];
    }
  }
  return str;
}
let x = 10,
  y = 20;
var result = fun`this is ${x} and ${y} the sum is ${x + y}`;
console.log(result); //this is 10 and 20 the sum is 30
//✱==============================================================✱//
//»  Note:  calling function the template will be sent as parameters to the function
//» any string will be written in the template will be sent in the "strings" array argument
//» and any template will be sent in "values".
//✤====================================================================✤//

//✤============ CH03-VID05 "Array API improvement" =============✤//

//✱  Example:  using "every()" array method.
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];
//# false: because not every element in the array starts with the "a" character
console.log(
  fruits.every(function (value, index, array) {
    return value[0] === 'a';
  })
); //false
//✱==============================================================✱//

//✱  Example:  using "some()" array method.
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];
//# true: because some of the array elements starts with "a" character
console.log(
  fruits.some(function (value, index, array) {
    return value[0] === 'a';
  })
); //true
//✱==============================================================✱//

//✱  Example:  using "map()" array method.
//»  Note:  function "map()" : mapping the array into new array. (returns new array)
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];
fruits.map((value, index, array) => {
  return `i like ${value}`;
}); //["i like apple", "i like strawberry", "i like banana", "i like orange", "i like mango"]
//✱==============================================================✱//

//✱  Example:  using "foreach()" array method.
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];
fruits.forEach((value, index, array) => {
  console.log(value);
});
//✱==============================================================✱//

//✱  Example:  using "find()" array method.
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];

fruits.find((value) => {
  return value === 'apple';
}); //"apple"
//»  Note:  if not found will return undefined.
//✱==============================================================✱//

//✱  Example:  using "fliter()" array method.
//»  Note:  fliter() : creats new array
var fruits = ['apple', 'strawberry', 'banana', 'orange', 'mango'];

var abfruits = fruits.filter((value, index, array) => {
  return value.startsWith('a') == true || value.startsWith('s') == true;
});
console.log(abfruits); //["apple", "strawberry"]
//✱==============================================================✱//

//✤====================================================================✤//

//✤============ CH03-VID06 "Object new shorthand creation" =============✤//

//# ES5: factory function. "Old way of creating object"
//✱  Example:  Object new creation short-hand.
function employee(ename, edept, esalary) {
  return {
    empName: ename,
    empSalary: esalary,
    empDept: edept,
    empInfo: function () {
      return this.empName + ' works in dept ' + this.empDept;
    },
  };
}
//✱==============================================================✱//

//➜ 1... ES6: Object new shorthand creation.
//✱  Example:  Object new creation short-hand.
function employee(empName, empDept, empSalary) {
  return {
    empName,
    empDept,
    empSalary,
    empInfo() {
      return this.empName + ' works in dept ' + this.empDept;
    },
  };
}
var emp = employee('Nour', 'SD', 2000);
console.log(emp.empName); //Nour
//✱==============================================================✱//
//✤====================================================================✤//

//✤============ CH03-VID07 "Default Parameters" =============✤//
//➜ 1... ES6: Default Parameters short-hand.
//✱  Example:  Default Parameters short-hand.

function employee(empName = 'Ali', empDept = 'SD', empSalary = 3000) {
  return {
    empName,
    empDept,
    empSalary,
    empInfo() {
      return this.empName + ' works in dept ' + this.empDept;
    },
  };
}
var e = employee();
console.log(e); //{empName: "Ali", empDept: "SD", empSalary: 3000, empInfo: ƒ}
//✱==============================================================✱//
//✤====================================================================✤//

//✤============ CH03-VID08 "Options object parameter" =============✤//

//➜ 1... The options object is widely used pattern that allows user-defined settings
//➜      to be passed to a function in the form of properties on an object.

//➜ 2... When an optional parameter isn't passed in, a default value should be used instead.

//➜ 3... Options object for a function with four or more arguments it's usually a good idea.

//✱  Example:  Default Object parameter.
function newDefault(msg = 'hello', options = {}) {
  let title = options.title;
  let fname = options.fname;
  let lname = options.lname;
  return msg + ' ' + title + ': ' + fname + ' ' + lname;
}
//!  warning:  a) if the user didn't sent the object parameter to the function all the properties will be read as "undefined" [title,fname,lname]
//!  warning:  b) if the user sent another value like number or string all properties in this case will be read as "undefined".
//✱===========================================================================================================================✱//

//✱  Example:  Default Object parameter with object destructuring.
function newDefault(msg = 'hello', { title, fname, lname } = {}) {
  return msg + ' ' + title + ': ' + fname + ' ' + lname;
}
//»  Note:  this approach has the same issue.
//✱============================================================✱//

//✱  Example:  Default Object parameter with "Object.assign" approach.
function newDefault(msg = 'hello', options = {}) {
  let defaultObj = {
    title: 'eng',
    fname: 'aaa',
    lname: 'bbb',
  };
  let settings = Object.assign({}, defaultObj, options);
  return (
    msg + ' ' + settings.title + ': ' + settings.fname + ' ' + settings.lname
  );
}
//✱================================================================✱//
//✤====================================================================✤//

//✤============ CH03-VID09 "Object.assign()" =============✤//
//✱  Example:  Default Object parameter with "Object.assign()" approach.
function CoursDetails(msg = 'Greetings', option = {}) {
  let courseDefaultInfo = {
    courseName: 'Es6',
    courseDuration: '3Days',
    supervisor: 'Anonymous',
  };

  //  Todo:  setting default values to the options object using "Object.assign()"
  //»  Note:  "settingObj" is the accumilation of the three object properties.
  let settingObj = Object.assign({}, courseDefaultInfo, option);
  return `${msg} this is course 
  ${settingObj.courseName} its duration is 
  ${settingObj.courseDuration} under supervision of 
  ${settingObj.supervisor}`;
}

var course = {
  courseName: 'Js',
  courseDuration: '7Days',
  supervisor: 'Ali',
};
CoursDetails('hello', course);
//✱================================================================✱//
//✤====================================================================✤//

//✤============ CH03-VID010 "Destructuring and named arguments" =============✤//

//✱  Example:  another approach like "Object.assign()" is using destructuring and named arguments for our options object.
//  Todo:  setting default values to the options object using destructuring and named arguments.
function CoursDetails(
  msg = 'Greetings',
  {
    courseName = 'Es6',
    courseDuration = '3Days',
    supervisor = 'Anonymous',
  } = {}
) {
  return `${msg} this is course 
  ${courseName} its duration is 
  ${courseDuration} under supervision of 
  ${supervisor}`;
}

var course = {
  courseName: 'Js',
  courseDuration: '7Days',
  supervisor: 'Ali',
};
CoursDetails('hello', course);
//✱====================================================================================================================✱//
//✤====================================================================✤//

//✤====================== CH03-VID011 "Proxy" ======================✤//

//➜ 1... "Proxy" object is one the new APIs in ES6, and used to define custom behavior for fundamental operations.

//➜ 2... There are many real-world applications for Proxies.
//• a) Validation.
//• b) Value correction.
//• c) Tracing property accesses etc...

//➜ 3... To create a Proxy we need [target object, handler, traps].
//• Handler is an object that contains trapping methods to control the behavior of the target object.

//✱  Example:  creating our custom Proxy.
handler = {
  set: function (obj, prop, value) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = value;
    } else {
      throw `prop ${prop} is not allowed in this object`;
    }
  },
  //»  Note:  defining "get()" property method using ES6 shorthand.
  get(obj, prop, value) {
    if (prop in obj) {
      return obj[prop];
    } else {
      return `creating new property is not allowed`;
    }
  },
  has: function () {},
};

targetObject = {
  name: 'abc',
  age: 10,
};

var p = new Proxy(targetObject, handler);
p.address = '123 st.'; //will through an error.
console.log(p.address); //creating new property is not allowed
//✱==========================================================✱//
//✤====================================================================✤//
