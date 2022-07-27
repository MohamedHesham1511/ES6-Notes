//✤===================== CH04-VID01 "Set object" =====================✤//

//➜ 1... Set object : Storing unique values either primitive or objects.

//➜ 2... In ES6 we have a new API called "Set".
//• Set used for storing unique values.
//• could store "primitives" or "objects".

//✱  Example:  creating Set using constructor.

var mySet = new Set([1, 2, 'my', 9, 'sss']);
//✱=========================================✱//

//➜ 3... Methods of Set:
//• 1) "mySet.add(val)" =====> to add new value in the set.
//• 2) "mySet.delete(val)" =====> to delete specific value from the set.
//• 3) "mySet.has(val)" =====> to check of the val is in the set or not.
//• 3) "mySet.clear()" =====> to clear the set from all values.

//➜ 4... properties of Set:
//• myset.Size ====> to get the number of values/elements in my set.

//✱  Example:  creating Set using constructor.

var mySet = new Set();
mySet.add('1'); //{"1"}
mySet.add(150); //{"1",150}
mySet.add([1, 2, 3]); //{"1", 150, Array(3)}
console.log(mySet.has(1)); //false => because we stored "1" as string.
mySet.add('1'); //{"1", 150, Array(3)}
mySet.add(1); //{"1", 150, Array(3), 1}
//✱=========================================✱//

//➜ 5... Iterator Methods:
mySet.entries(); //SetIterator {'1' => '1', 150 => 150, Array(3) => Array(3), 1 => 1}
mySet.values(); //SetIterator {'1', 150, Array(3), 1}
mySet.keys(); //SetIterator {'1', 150, Array(3), 1}
//✤====================================================================✤//

//✤===================== CH04-VID02 "Map object" =====================✤//

//➜ 1... "Map" Object is on of the new API in ES6.

//➜ 2... "Map" is an object of key/value pairs, both key and value can be either primitive or object values.
//• It allows to store our data in form of key value pairs.
//• Both key and value can be either primitive or object values.
//• keys cannot be repeated.

//➜ 3... "Map" Methods:
//• 1) "myMap.set(key,val)" ====> to set new key and it's value
//• 2) "myMap.get(key)" =====> to know the value for specific key
//• 3) "myMap.delete(key)" =====> to delete specific key
//• 4) "myMap.has(key)" =====> to check if the map has that key or not.
//• 5) "myMap.clear()" =====> to clear the map from all values.

//➜ 4... "Map" Iterator Methods:
//• 1) "myMap.entries()"
//• 2) "myMap.values()"
//• 3) "myMap.keys()"

//➜ 5... "Map" Property:
//• "myMap.size" ==> to know the number of elements inside my map.

//✱  Example:  creating "Map" using constructor.
//»  Note:  storing our data in form of key/value pair per each entry (array).
var myMap = new Map([
  ['one', 'abc'],
  [1, 'xyz'],
  [101, 150],
]);

console.log(myMap); //Map(3) {'one' => 'abc', 1 => 'xyz', 101 => 150}

myMap.set('abc', 123);
console.log(myMap); //Map(4) {'one' => 'abc', 1 => 'xyz', 101 => 150, 'abc' => 123}

myMap.set('one', 123);
console.log(myMap); //Map(4) {'one' => 123, 1 => 'xyz', 101 => 150, 'abc' => 123}

console.log(myMap.values()); //MapIterator {123, 'xyz', 150, 123}

console.log(myMap.keys()); //MapIterator {'one', 1, 101, 'abc'}

console.log(myMap.size); //4

myMap.delete('one'); //true
console.log(myMap); //Map(3) {1 => 'xyz', 101 => 150, 'abc' => 123}
//✱=========================================================================✱//

//✤====================================================================✤//

//✤===================== CH04-VID03 "For .. of" =====================✤//

//➜ 1... "for ...of" statement iterates over property values and it's a better way to loop over Iterable objects.

//➜ 2... Example of iterable objects.
//• 1) String.
//• 2) Array.
//• 3) Set.
//• 4) Map.

//»  Note:  the object is not considered as iterable object.

//✱  Example:  iterating using "for ...of".

var arr = [1, 2, 3, 4, 5, 6];
for (i of arr) {
  //»  Note:   "i" ====> is the values in the array.
  console.log(i); //1  2  3  4  5  6
}
//✱=========================================================================✱//

//✱  Example:  iterating on an object using "for ...in".

var obj = {
  username: 'Ali',
  userage: 25,
  salary: 10000,
};

for (key in obj) {
  console.log(key); //username   userage    salary
  console.log(obj[key]); //Ali   25    10000
}
//»  Note:  If we used "for ...of" on the object it will through an error because the objects is not iterable.
//✱================================================================================✱//
//✤====================================================================✤//

//✤===================== CH04-VID04 "Example for of with map" =====================✤//

//➜ 1... because the new APIs [Set, Map] has iterator methods and they are iterables, then we could use "for ...of".

//✱  Example:  iterating using "for ...of" on a "Map".

var myMap = new Map([
  ['one', 'abc'],
  [1, 'xyz'],
  [101, 150],
]);

for (i of myMap) {
  console.log(i); //['one', 'abc']  then  [1, 'xyz']  then  [101, 150]
}
//✱================================================================================✱//

//✤================================================================================✤//
