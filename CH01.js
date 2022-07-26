//✤============ CH01-VID01 "Let & const" =============✤//

//➜ 1... Vanilla JS environment work as function scope only and it has leakage in dealing with block scopes.

//•  var   ==  Function scope  ==  Hoisted  == could be Reassigned.
//•  let   ==   Block scope    ==  No Hoist == could be Reassigned.
//•  const ==   Block scope    ==  No Hoist == cannot be Reassigned. (should be initiated with initial value once created)

function incVar() {
  console.log(i); //error because "i" not Hoisted
  for (let i = 0; i < 5; i++) {
    //# "i" will be seen within this scope only.
    //# "pi" will be seen within this scope only.
    const pi = Math.PI;
    console.log(i);
    console.log(pi);
  }
  console.log(i); //error because "i" is defined using "let" and it's block scoped.
  console.log(pi); //error because "pi" is defined using "const" and it's block scoped.
};
//»  Note:  Any variable created using "let" or "const" is not hoisted.
//✤====================================================================✤//


//✤============ CH01-VID02 "Solving closure problem using let" =============✤//

//➜ 1... in Vanilla JS closure issue was solved using "IIFE" Pattern.
function outerFun(){
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
};
outerFun();
console.log(arr[0]()); //0
console.log(arr[1]()); //1
console.log(arr[2]()); //2


//➜ 2... But in "ES6" closure issue could be solve using "let".
function outerFun1(){
  var arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(function () {
    console.log(i);
  });
}
return arr;
};
console.log(arr);//[0, 1, 2]
//✤====================================================================✤//

//✤============ CH01-VID03 "Rest parameter" =============✤//

//➜ 1... Rest parameter should be the last parameter in the function definition.
//•  function dispalyNames(p1,...arr) { };
//✱  Example:  using rest parameter in function signature.

function adding(x, y, ...z) {
  console.log(x); //1
  console.log(y); //2
  //# "z" is an array.
  console.log(z); //(5)[3,4,5,6,7]

  //# "arguments" is a collection.
  console.log(arguments[0]); //1
  console.log(arguments[1]); //2
  console.log(arguments[2]); //3
  console.log(arguments); //Arguments(7)[1,2,3,4,5,6,7]
}
adding(1, 2, 3, 4, 5, 6, 7);

//»  Note:  "Rest Parameter" could be used in function signature only.
//✤====================================================================✤//

//✤============ CH01-VID04 "Spread operator" =============✤//

var arr = ["Mango", "Apple", "orange", "Kiwi"];
var arr2 = ["Berries", "Banana", ...arr]; //spread "arr" array.

console.log(arr2); //(6) ["Berries", "Banana", "Mango", "Apple", "orange", "Kiwi"]

function FullName(fname, lname) {
  return fname + lname;
}
var username = ["Ali ", "Kareem"];
FullName(...username); //spread the "username" array.
console.log(FullName(...username)); //ALi Kareem

//✤====================================================================✤//


//✤============ CH01-VID05 "SpreadOperator and Reference Value" =============✤//

//»  Note:  All objects are refernece values,
//» so if we need to create a copy of an object we used to iterate on the object
//» properties and create a copy of them in the new copy object.
//# old fashioned of creating a copy of an object is to iterate on the object properties 
//# using for "(key in object) {}" and create a copy of them in the new copy object.
var obj = { name: "ali", age: 10 };
var obj2 = {};
for (key in obj) {
  obj2[key] = obj[key];
}

//➜ 1... now we can use "spread operator" instead.
var obj = { name: "ali", age: 10 };
obj3 = { ...obj };
console.log(obj3); //{ name: "ali", age: 10 }

//»  Note:  Now "obj3" and "obj" are two differnet object in reference but both has the same values (Identical).
//»  Note:  it also works with arrays.
var arr2 = ["Berries", "Banana", "Mango", "Apple", "orange", "Kiwi"];
var arr3 = [...arr2];
console.log(arr3); //(6) ["Berries", "Banana", "Mango", "Apple", "orange", "Kiwi"]
//✤====================================================================✤//

//✤============ CH01-VID06 "Array Destructuring part1" =============✤//
//✤============ CH01-VID07 "Array Destructuring part2" =============✤//

//➜ 1... In Vanilla Javascript to pick element from the array "arr":
var arr = [1, 2, 3, 7, , 4, 5, 6, "a", "b"];
var x = arr[0]; //1
var y = arr[5]; //4
var z = arr[3]; //7

//➜ 2... destructuring : decomposing structure "ES6" feature
//»  Note:  we can use the feature of default value in case the value in "arr" is undefined.
//»  Note:  we could use the feature of the Rest "operator/spread" at the last parameter.
//»  Note:  it's also called gathering syntax.
var arr = [1, 2, 3, 7, , 4, 5, 6, "a", "b"];
var [x, , , z = 10, , y, ...w] = arr;
console.log(x); //1
console.log(y); //4
console.log(z); //7
console.log(w); //(4) [5, 6, "a", "b"]

//»  Note:  destructuring could be done for iterable objects only.
//»  Note:  string is considered iterable object.
Array.isArray(/* array[] */); //static method for Array object insures if the value is array or not.
//✤====================================================================✤//

//✤============ CH01-VID08 "Object Destructuring part1" =============✤//

//➜ 1... we could make Object destructuring also.
//✱  Example:  Way one "classic way".
var obj = {
  name: "ES6",
  main: "JavaScript",
  born: 2015,
  instructor: "Ali",
};

var x = obj.name;
var y = obj.main;
var z = obj.born;
//✱===============================✱//

//✱  Example:  using object destructuring.
var obj = {
  name: "ES6",
  main: "JavaScript",
  born: 2015,
  instructor: "Ali",
};
//# way 1. declaring/initializing variables with object destructuring in the same step.
var { name: x, main: y, born, instructor } = obj;
//# way 2. separate declaration step.
var x, y;
({ name: x, main: y, born, instructor = "anonymous" } = obj);
console.log(x); //ES6
console.log(y); //JavaScript
console.log(born); //2015
console.log(instructor); //Ali
//✱===================================✱//
//✤====================================================================✤//


//✤============ CH01-VID09 "Object Destructuring part2" =============✤//

function fun() {
  var obj = {
    name: "ES6",
    main: "JavaScript",
    born: 2015,
    instructor: {
      instName: "Ali",
    },
    a:1,b:2,c:3
  };
  return obj;
}

var x, y;

({
  name: x="abc",
  main: y="xyz",
  born:2000,
  instructor: { instName: name, instAge: age = 20 } = {},//setting default value for instructor object.
  ...o
} = fun() || {});//setting a fall-back empty object in case the returned value from the "fun()" is undefined. 

console.log(x); //ES6
console.log(y); //JavaScript
console.log(born);//2015
console.log(name);//Ali
console.log(age);//20
console.log(o);//{a:1,b:2,c:3}
//✤====================================================================✤//
