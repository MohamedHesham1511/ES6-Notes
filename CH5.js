//✤===================== CH05-VID01 "Iterable object" =====================✤//

//➜ 1... Iterable object: I could say that the object is iterable if it has function "@@iterator" method.
//»  Note:  the array is an iterable object, so it has "[Symbol.interator()]" method.

//✱  Example:  showing that the array has "[Symbol.interator()]" method.

var arr = [1, 2, 3, 4, 5, 6]; //arr ===> is an Iterable object.
var iter = arr[Symbol.iterator](); //iter ===> is an Iterator object.

iter.next(); //{value: 1, done: false}
iter.next(); //{value: 2, done: false}
iter.next(); //{value: 3, done: false}
iter.next(); //{value: 4, done: false}
iter.next(); //{value: 5, done: false}
iter.next(); //{value: 6, done: false}
iter.next(); //{value: undefined, done: true}
iter.next(); //{value: undefined, done: true}
//✱=========================================================================✱//

//➜ 2... Iterable object:
//• 1) Can use "for..of".
//• 2) destructuring.
//• 3) ...spread operator.

//✱  Example:  destructuring "Map" object.
var myMap = new Map([
  ['one', 'abc'],
  [1, 'xyz'],
  [101, 150],
]);

var [x, y, z] = myMap; //destructuring "Map" object.
console.log(x); //(2) ['one', 'abc']
console.log(y); //(2) [1, 'xyz']
console.log(z); //(2) [101, 150]
//✱=====================================✱//

//✤====================================================================✤//

//✤===================== CH05-VID02 "Generator function (object object to iterable object)" =====================✤//

//➜ 1... object object which doesn't have @@iterator method could be iterable by:
//• (1) Implementing "@@iterator" method.
//✱  Example:  making object object iterable by Implementing "@@iterator" method.

var obj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: '',
          done: '',
        };
      },
    };
  },
};
//»  Note:  Now obj is ietrable object.
//✱===========================================================================✱//

//• (2) By Using generator function.
//✱  Example:  making object object iterable by using generator function.

function* gen() {
  yield 10;
  yield 15;
  yield [11, 23, 12];
  yield 'abc';
}
for (i of gen()) {
  console.log(i); // 10    15    [11,23,12]    "abc"
}
//✱===============================================✱//

//✤==============================================================================================================✤//
