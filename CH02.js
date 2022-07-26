//✤============ CH02-VID01 "Arrow function" =============✤//

//➜ 1... function statement.
function functionName() {}

//➜ 2... function expression.
var functionName = function () {};

//➜ 3... Arrow function == Fat Arrow ==  Lambda expression.
var fun = (x, y) => {
  console.log('Arrow Function');
  return x + y;
};
//✤====================================================================✤//

//✤============ CH02-VID02 "Lexical binding" =============✤//

//✱  Example:  "this" issue.
var obj = {
  username: 'Ali',
  display: function () {
    setTimeout(function () {
      //# "this" here refers to window object.
      //»  Note:  simply it will search for "username" property on the window object.
      console.log(this.username); //undefined
    }, 2000);
  },
};
console.log(obj.display()); //undefined
//✱=======================✱//

//✱  Example:  solving "this" issue using (that and this).

var obj = {
  username: 'Ali',
  display: function () {
    var that = this;
    setTimeout(function () {
      //# "that" here refers to the caller object.
      //»  Note:  simply it will search for "that" which will be the caller object.
      console.log(that.username); //ALi
    }, 2000);
  },
};
console.log(obj.display()); //Ali
//✱====================================================✱//

//✱  Example:  solving issue using arrow function.
//»  Note:  Arrow function doesn't has "this".
//» Arrow function binds to its lexical scope.
var obj = {
  username: 'Ali',
  display: function () {
    setTimeout(() => {
      //# Arrow function binds with the scope which defined in.
      console.log(this.username); //Ali
    }, 2000);
  },
};
console.log(obj.display()); //Ali
//✱=============================================✱//

//✤====================================================================✤//

//✤============ CH02-VID03 ""this" and arrow function" =============✤//

//➜ 1... arrow function doesn't have "this" so it binds "this" which we write inside it with the lexical environment.
var username = 'javascript'; //defined on window object
var newFun = () => {
  //# "this" here refers to window object.
  return this.username;
};

var obj = {
  username: 'Ali',
  display() {
    setTimeout(() => {
      console.log(that.username);
    }, 2000);
  },
  objFun: newFun,
};

obj.objFun(); //"javascript"
//✤====================================================================✤//
