//✤===================== CH9-VID01 "Promise" Asynchronous operation =====================✤//

//➜ 1... "Asynchronous operation": means operation to be done in the future with out stopping the execution of the original code file.

//➜ 2... Examples of Asynchronous operations:
//• 1) Ajax requests
//• 2) call back functions: is the function which we send as a paramater of another function.

//➜ 3... ES6 new featured API (Promise)
//• it starts its live as "pending" then moves to eihter of two cases.
//• 1) Fulfilled Resolve(val).
//• 2) Rejected Reject(val).
//• then to the final state which is (Settled).

//✱  Example:  creating our Promise.

// Todo 1. create our Promise using constructor method.
var myPromise = new Promise(function (success, failure) {
  if (condition) {
    //fire then
    success();
  } else {
    //fire catch
    failure();
  }
});
// Todo 2. create ".then()" which will have the body of implementation in case success.
myPromise.then(function (data) {
  console.log(data);
});
// Todo 3. create ".catch()" which will have the body of implementation in case failure.
myPromise.catch(function (err) {
  console.log(err);
});
//✱================================================✱//

//✱  Example:  creating our Promise example and prompting user to enter data.

var promise = new promise(function (success, failure) {
  //»  Note:  "+" means convert it to numerical value.
  var x = +prompt('enter your number', '');

  if (x > 10) {
    //in case resolved succeded
    success('number within range');
  } //in case failed
  else {
    failure('out of range value');
  }
});

promise.then(function (
  info //resolve "succeded"
) {
  console.log(info);
});

promise.catch(function (
  info //reject "failed"
) {
  console.log(info);
});
//✱=======================================================================✱//

//✤=================================================================================✤//

//✤===================== CH8-VID02 "Chained Promises" =====================✤//

// we could make our code chainable

new promise(function (success, failure) {
  //+ meanse convert it to numerical value
  var x = +prompt('enter your number', '');

  if (x > 10) {
    //in case resolved succeded
    success('number within range');
  } //in case failed
  else {
    failure('out of range value');
  }
})
  .then(function (
    info //resolve "succeded"
  ) {
    console.log(info);
  })
  .catch(function (
    info //reject "failed"
  ) {
    console.log(info);
  });
//==========================================================//
//promise if failed goes to the nearest catch
//if succeded goes to then
//in ES9 introduced finally method which will be executed wither failed or succeded
//generally will be executed after finishing all chainable promises
promise
  .then(function () {
    return new Promise();
  })
  .then()
  .then()
  .catch(function () {
    return new Promise();
  })
  .then()
  .catch()
  .finally();
//✤=================================================================================✤//

//CH8-VID03 "Ajax request using promises"
//to make ajax request we must create our xhr object
new Promise(function (s, f) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'filename.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        //success
        s(xhr.responseText);
      } else {
        //failure
        f('not found');
      }
    }
  };
  xhr.send('');
})
  .then(function (obj) {
    var jsObject = JSON.parse(obj);
    console.log(jsObject);
  })
  .catch(console.log);
//==========================================================//

//CH8-VID04 "Promise methods"
//Promise API has static methods
//1.. Promise.all([])
//returns eihter resolved promise if all passed promises are resolved
//or rejected promise if as soon as one of these promises is rejected
//2.. Promise.race([])
//Returns rejected or resolved promise as soon as one of the passed promises is settled
//3.. Promise.reject(reason)
//Returns rejected promise object with the given reason.
//4.. Promise.resolve(reason)
//Returns resolved promise object with the given reason.

var promise1 = new Promise(function (s, f) {
  setTimeout(function () {
    s('promise1 succeeded');
  }, 5000);
});

var promise2 = new Promise(function (s, f) {
  setTimeout(function () {
    f('promise2 failed');
  }, 2000);
});

var promise3 = new Promise(function (s, f) {
  setTimeout(function () {
    s('promise3 succeeded');
  }, 1000);
});

promise1.then(alert).catch(console.log);
promise2.then(alert).catch(console.log);
promise3.then(alert).catch(console.log);

Promise.all([promise1, promise2, promise3]).then(alert).catch(console.log); //promise2 failed
Promise.race([promise1, promise2, promise3]).then(alert).catch(console.log); //alerted promise3 succeded
