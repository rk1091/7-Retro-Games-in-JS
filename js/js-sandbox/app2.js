const name = 'rk';
const age = 20;
const job = 'web dever';
const city = 'florence';
let html;

//w/out template strings -es5

html = '<ul> <li>Name: ' + name + '</li><li>Age: ' + age + '</li></ul>';

function hello() {
    console.log('jello');
}

//w. template str
html = `<ol>
<li>Name: ${name}</li>
<li>City: ${city}</li>

<li>${2+9}</li>
<li>${hello()}</li>
<li>${age > 30 ? 'over 30': 'under 30'}</li> 
</ol>`;
//? stands for true, : else
document.body.innerHTML = html;


//arrays

const nos = [33, 56, 42, 1, 99, 6];
//isarray, indexof,concat,reverse,sort,splice

nos.push(250); //at end
nos.unshift(9); //at start
nos.pop(); //remove end
nos.shift(); //remove from start
console.log(nos);

let val = nos.sort(); //as u can see just sorts 1st no of arr

//use compare func for sorting entire array properly

val = nos.sort(function(x, y) {
    return x - y;
});

//reverse order
val = nos.sort(function(x, y) {
    return y - x;
});

//returns 1st no under 60
function under60(num) {
    return num < 60;
}

vall = nos.find(under60)
console.log(nos);
console.log(vall);

let bday = new Date('9-10-21')
console.log(bday); //diff formats also exist, .getMonth , .setMOnth etc exist

let day;
let d = new Date().getDay();
switch (new Date().getDay()) {
    case 0, 2, 6:
        day = 'nonveg';
        break;
    case 1:
        day = 'veg';
        break;
    default:
        day = 'non';
        break;
}
console.log(`today is ${day}, ${d}`);

//IIFEs : Immidiately Invokable Func Exps

(function() {
    console.log('iffe ran');
})();

(function(na) {
    console.log('iffe ran' + na);
})('rk');

//property methods
//oops todo is an object

const todo = {
    add: function() {
        console.log('add');
    },
    edit: (function(id) {
        console.log(`edit ran ${id}`);
    })

}

todo.delete = (function() {
    console.log('delete ran');
})

todo.add();
todo.edit(22);
todo.delete();


//do while
let i = 90;
do {
    console.log('no' + i);
    i++;
}
while (i < 100);

const cars = ['breeza', 'r8', 'bmw', 'ferrari']

//for each
cars.forEach((e, index, arr) => {
    console.log(e, index);
    console.log(arr);
});
console.log("");
//map
const users = [
    { a: 1, b: 2 },
    { a: 12, b: 32 },
    { a: 31, b: 2 }
]

const ids = users.map((u) => console.log(u.a));
console.log(ids);


//for in loop python, [for loop normal {i=0;i<n;i++} ]
const person = {
    name: 'rk',
    age: 30
}

for (let x in person) { //via every property in person obj
    console.log(`${x} : ${person[x]}`); //print property and value of person(obj)'s propx ki value
}