//CH10-VID01 "Async & await"
//new Keywords ES8
//"await" keyword could be used only if the function name comes with "async" keyword
//we use async & await with prmoise based functions
//used to make the code work in synchronous mode

//to make it work in synchronous mode we add async to the function
//and we aslo add await keyword to the inner function
async function promFun() {
  await new Promise(function (s, f) {
    setTimeout(function () {
      s('promise1 succeeded');
    }, 5000);
  })
    .then(console.log)
    .catch(console.log);

  await new Promise(function (s, f) {
    setTimeout(function () {
      s('promise2 failed');
    }, 2000);
  })
    .then(console.log)
    .catch(console.log);

  await new Promise(function (s, f) {
    setTimeout(function () {
      s('promise3 succeeded');
    }, 1000);
  })
    .then(console.log)
    .catch(console.log);
}

promFun();
//promise1 succeeded after 5sec
//promise2 failed after 7sec(5+2)
//promies3 succeeded after 8sec (5+2+1)
//============================================================//
//CH10-VID02 "Transpiler"
//Translate/Compilers
//used to translate from the new releases of Js into vanilla JS
//From JS ES6 ======> Vanilla JS
//Example: Bable Transpiler
//============================================================//
//CH10-VID03 "New features (ES7_ES8_ES9)"

//ES7 New features:
//1.. Array.includes
[1, 2, 3, 4, 5, 6].includes(2); //true
//2.. Exponential Operator **
Math.pow(5, 10); //9765625
5 ** 10; //9765625

//ES8 New features:
//String API
//String.padStart(num)
//String.padEnd(num)
var str = 'my string';
var str2 = 'JavaScript';
var str3 = 'object';
str.padStart(15); //"        my strsing" ==> length 15 character
str2.padStart(15); //"       JavaScript" ==> length 15 character
str3.padStart(15); //
// instead of adding spaces we add *
str.padStart(15, '*'); //"********** my String" ==> length 15 character
str.padStart(15, '-'); //"---------- my String" ==> length 15 character

//Object.getOwnPropertyDescriptors(String) ==> to get all properties for specific object
//Object.getOwnPropertyDescriptors(String.prototype) ==> to get the protoptype chaining properties

//Object.values(obj) ==> gets all the properties values in an object
var obj = {
  name: 'javaScript',
  category: 'Web Tech.',
};
Object.values(obj); //["javaScript","Web Tech."]
Object.keys(obj); //["name","category"]

Object.entries(obj); //[Array(2),Array(2)]
//["name","javaScript"]
//["category","Web Tech."]

//ES9 New features
//1.. Symbol.description
//2.. promise.then().catch().finally() ==> finally block
//3.. try{} catch{}
//4.. for Array API
//a.. array.flat()
//b.. array.flatMap()

//============================================================//

//CH10-VID04 "BigInt_ECMAScript 2020"
//New premitive data type
//BigInt
//using constructor
let num = BigInt(10);
//literal creation
let num2 = 20n;

console.log(num); //10n
console.log(num2); //20n

typeof num; //"bigint"
let x = 10;
x == num; //true due to auto coersion
x === num; //false due to strict equality

x + Number(num); //20
BigInt(x) + num; //20n
parseInt(num); //10

//============================================================//

//CH10-VID05 "Nullish Operator_ECMAScript 2020"

//nullish operator ?? is a binary operator
left ?? right; //if left side null or undefined so right will be returned
left || right; // OR
left && right; //AND

var x = null,
  y = '',
  z = 0,
  w = false,
  n = 50,
  m; //undefined

var a = z ?? 5; //a will be equal to 0
a = y ?? 5; //a ""
a = x ?? 5; //a 5
a = m ?? 5; //a 5
a = m && 5; //a undefined
a = m || 5; //a 5
a = z ?? 5; //z 0

//============================================================//
//CH10-VID06 "Chaining Operator_ECMAScript 2020"

//chaining operator ?.
var obj = {
  name: 'javascript',
  info: {
    type: 'scripting Lang.',
    cat: 'web',
  },
  disp() {
    return this.name;
  },
};
//we want to access a property which not exists
//obj.age;//indefined
console.log(obj.info.skills); //undefined (Type error)
//so we use chaining operator
console.log(obj.info.skills?.());
//============================================================//
//CH10-VID07 "globalThis ECMAScript 2020"

//this in the global scope refers to the window object
//in ECMAScript 2020 created object named globalThis also referes to the window object
//in both global or in an inner scope

var nm = 'new Feature'; //global variable

var obj = {
  name: 'javascript',
  info: {
    type: 'scripting Lang.',
    cat: 'web',
  },
  disp() {
    return globalThis.nm;
  },
};

obj.disp(); //"new Feature"
//============================================================//
