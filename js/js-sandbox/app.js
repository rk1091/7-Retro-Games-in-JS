// alert('hi world')
console.log({ a: 1, b: 2 });
console.log([1, 2, 3, 4, 5]);
console.table({ 1: 1, b: 2 }); //fails at a:1
console.error('this err msg');
console.clear();
console.warn('warning youre an idiot!');
console.time('hello');
console.log({ a: 1, b: 2 });
console.log([1, 2, 3, 4, 5]);
console.log({ a: 1, b: 2 });
console.log([1, 2, 3, 4, 5]);
console.timeEnd('hello'); //make sure only log or at least no warnings aint in btw

console.log("");
console.log('var const let');
console.log("");
//var,let
var k = 'rk'
console.log(k);
k = 'e';
console.log(k);
// var and let can be defined later as well sometime after declaring
//not for const though, following also errors!
//const
// const k = 'rk'
// console.log(k);
// k = 'e';
// console.log(k);

//const used for objs and arrays, values can be changed BUT NOT REASSIGNED!
//defining obj with 2 properties
const person = {
    name: 'rk',
    age: 30
}
person.name = 'rk22'
person.age = 20
console.log(person);

const no = [1, 2, 3, 4]
no.push(9)
console.log(no);
//const no = [1, 2, 3, 4,9] not allowed anymore
const sym = Symbol();
//date ; obj; array these r reference data types
const today = new Date()
console.log(today, typeof today);
console.log(" ");

//type conversions

let val;
val = String(55);
val = String(4 + 4)
val = String(true) //boolean here
val = String(new Date())
val = String([1, 2, 3])

//toString() so either use upar or this
val = (5).toString()
val = (true).toString()




console.log(val);
console.log(typeof val);
console.log(val.length); //for str OBSERVE: LENGTH DIDNT NEED () coz not a method or function !!! its a PROPERTY!!
console.log("");

var vall;
vall = Number('hello')
vall = Number([1, 2, 3])

console.log(vall);
console.log(typeof vall);

console.log("");

var va;
va = parseInt('100.30') //only int
va = parseFloat('100.30')

console.log(va);
console.log(typeof va);
console.log(va.toFixed(3)); //decimal set
console.log("");

//val= Math.ab, .abs, .min, max,round(x) such props exist

var v;
v = Math.PI;
v = Math.E;
v = Math.floor(Math.random() * 20 + 1) //random btw 0,1
console.log(v);
console.log("");

var w = 'hi';
w += 'that\'s awesome'; //append, escaping
console.log(w + ' value ' + v); //concatenation

//touppercase func etc
//w[1] ,prints i ,behaves like array

console.log(w.indexOf('w')); //lastindex aslo exists
console.log(w.charAt('10'));
console.log(w.charAt(w.length - 1)); //last char

//substring, slice, split,