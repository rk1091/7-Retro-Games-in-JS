//doc .getele by class name
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'orange';
items[3].textContent = 'hell';
// //doc.getelebyid

console.log(document.getElementById('task-form').id);
console.log(document.getElementById('task-title'));

document.getElementById('task-form').style.color = 'purple';
document.getElementById('task-title').style.backgroundColor = 'pink';
//document.getElementById('task-title').style.display = 'none'


document.getElementById('task-title').textContent = 'my tasks';
document.getElementById('task-title').textContent = 'task list';

const taskTitle = document.getElementById('task-title');

//taskTitle.innerHTML('<span style="color: yellow ">tasks</span>');


console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';

//html to array

lis = Array.from(lis);

lis.reverse(); //error lis not a func, collection is array type similar

lis.forEach(function(li, index) {
    console.log(li.className);
    li.textContent = `${index}: Hello`;
});

const iems = document.querySelectorAll('ul.collectionli.collection-item')
    //foreach w/out convert
iems.forEach(function(iem, index) {
    //console.log(li.className);
    iem.textContent = `${index}: Hello`;
});

console.log(iems);

const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieve = document.querySelectorAll('li:nth-child(even)');


liodd.forEach(function(liodd, index) {
    liodd.style.background = 'green';

});
for (let i = 0; i < lieve.length; i++) {
    lieve[i].style.background = 'light pink';
}

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);

// document.querySelector('li').style.color = 'brown';
// document.querySelector('ul li').style.color = 'mustard';


// document.querySelector('li:last-child').style.backgroundColor = 'green';

// document.querySelector('li:nth-child(3)').style.color = 'blue';
// document.querySelector('li:nth-child(4)').style.color = 'green';

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// // scriptsArr.forEach(function(script) {
// //     console.log(script.getAttribute('src'));
// // });

// //console.log(val);