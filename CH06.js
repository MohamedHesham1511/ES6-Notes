//✤===================== CH06-VID01 "Symbol" =====================✤//

//➜ 1... "Symbol" : One of the primitive data types in ES6,
//➜       same as (Numaber, String, Boolean, Undefined, Null).

//➜ 2... The value of a "Symbol" is unique.
//• could be used as  "UUID" or "GUID".
//# "UUID" : Universally Unique Identifier.
//# "GUID" : Globally Uinque Identifier.
//• could be used as a key for an object.

//✱  Example:  creating a symbol using "symbol()" or "symbol.for()".

symbol('description');
symbol.for('description');
//✱==============================================================✱//

//✱  Example:  symbols created using "symbol()" are not equal even then have the same "description".

var x = symbol('abc');
var y = symbol('abc');
x == y; //false
x === y; //false
typeof x; //"symbol"
y.description; //"abc"
x.description; //"abc"
//✱=============================================================================================✱//

//✱  Example:  creating a symbol using "symbol.for()".

//»  Note:  the two variales "xx" and "yy" refer to the same symbol registery.
var xx = symbol.for(10);
var yy = symbol.for(10);
xx == yy; //true
xx === yy; //true

Symbol.keyFor(xx); // "10"
Symbol.keyFor(yy); // "10"
//✱================================================✱//

//✤====================================================================✤//

//✤===================== CH06-VID02 "Symbol.replace()" =====================✤//

//➜ 1... "Symbol" was private Internally in the language (javascript).

//➜ 2... in ES6 it was agreed to expose the "Symbol" object for developers to use.

//➜ 3... static properties:
//• a) "Symbol.match()"
//• b) "Symbol.replace()"

//✱  Example:  implementing [Symbol.replace()] for an object and sent it as an argument for "str.replace()" method.

var str = 'this is javascript string';

var obj = {
  nm: 'abc',
  [Symbol.replace](str, idx) {
    return str.substring(0, idx) + 'test';
  },
};

console.log(str.replace(obj, 7)); //"this is test"
//✱=============================================================================================================✱//

//✤========================================================================✤//

//✤===================== CH06-VID03 "symbol as object property" =====================✤//

//➜ 1... Symbols could be used as object property:
//• Non-enumerable.
//• Anonymous.
//• Can't be converted to JSON object when we use "JSON.stringify()".

//✱  Example:  implementing symbol as object property.

var sym = Symbol(10); //unique

var obj = {
  //# Accessible
  [sym]: { userinfo: 'client', fav: 'green' },

  //# Not Accessible
  [Symbol(10)]: 'xyz', //symbols as object property 'unreachable'

  //# Accessible
  [Symbol.for(10)]: 123, //Symbol for object and reachable

  nm: 'abc',

  [Symbol.replace](str, idx) {
    return str.substring(0, idx) + 'test';
  },
};

obj[Symbol(10)]; //undefined
obj['nm']; //"abc"
obj[Symbol.for(10)]; //123  ===>  and can be modified (writable)
obj[sym].userinfo; //"client"   ===> (Accessible)

//»  Note:  using the "for(.. in )" will get the "nm" property only because any porperty created using symbol is Anonymous.
//» O/P nm:abc because all symbol parameters are unenumbrable.
for (i in obj) {
  console.log(i + ':' + obj[i]); // nm:abc
}

//»  Note:  To get symbol prop we use "object.getOwnPropertySymbols()" Object class method.
Object.getOwnPropertySymbols(obj); //(4) [Symbol(10), Symbol(10), Symbol(10), Symbol(Symbol.replace)]

//»  Note:   Can't convert to JSON object.
//» because all property its key is symbols will be ignored
JSON.stringify(obj); //{"nm":"abc"}
//✱=============================================================================================================✱//
