//✤===================== CH8-VID01 "Module and Named export" =====================✤//

//➜ 1... javascript doesn't has the concept of modular programming.

//➜ 2... in ES6 modularity has been implemented.

//➜ 3... There are to types of exports:
//• 1) Named export. (exporting for more than one thing in my module)
//• 2) default export per module which contains all the implementation.

//➜ 4... "import" statement is alwayes hoisted.

//➜ 5... to import our module script within "script" tags the "type" attribute should has the value "module".
// file : index.html
<script type='module'>{/* import {...} from "file path"; */}</script>;

//✱  Example:  creating our module file.
// file : module.js
// Todo 1. create our module and export what we want to be exported.
const pi = Math.PI;
export function circleAreaCalc(r) {
  return pi * r * r;
}

function sqrtVal(val) {
  return Math.sqrt(val);
}

export function displaySqrt(val) {
  var result = sqrtVal(val);
  return `the square root of  ${val} is ${result}`;
}
/*===================================================*/
// file : script.js
// Todo 1. import all exports from "module.js" as "mod".
import * as mod from './module.js';

var cirAreaResult = mod.circleAreaCalc(5);
console.log(cirAreaResult); //78.53981633
console.log(mod.pi); //error    ====>  becuase const pi doesn't have export keyword.

// Todo 2. if we want to import specific thing from the module.
import { circleAreaCalc } from './module.js';
import { circleAreaCalc as fun1, displaySqrt as fun2 } from './module.js';
console.log(fun2(16)); //the square root of 16 is 4
//✱================================================✱//

//»  Note:  import * : means import all implemented functions/variables which has export keyword in the file.

//✤=================================================================================✤//

//✤===================== CH8-VID02 "default export" =====================✤//

//➜ 1... using default export we could export only one thing which encapsulate all things(variables and functions).
//➜      so the best practice is we export className which contains our all implemented functions/variables.

//➜ ... we should first write export default class "Person" in CH7 file.
//➜     so we have the ability to import the class "Person".
import Person from './CH7';
var p = new Person();
console.log(p); //gives me all info about the object
console.log(p[Symbol()]); //undefined
//so in this case we implemented private property
console.log(p[phoneNum]); //Error because we didn't export phoneNum
//we only exported the className
//✤=================================================================================✤//
