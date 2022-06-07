console.log("");
console.log("");
console.log("app2 js starts");
console.log("");
console.log("");

let val;
const list = document.querySelector('ul.collection');
const li = document.querySelector('li.collection-item:first-child');

val = li;
val = list;

//get child nodes returns everything
val = list.childNodes; //gives back node list ---no clue wt that means
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

//1- element; 2- attribute, 3-text node,8- comment, 9-doc itself, 10-doctype


//children element nodes : html eles returned no comments or line breaks etc

val = list.children;
val = list.children[1];
list.children[1].textContent = 'nohell'

val = list.children[3].children;
//u can add id to child of child or even to a child val = list.children[3].children.id='test-link';

//first child
val = list.lastChild; //type
val = list.firstElementChild; //entire info abt first 4:hello listed


//get parent node
val = li.parentNode;
val = li.parentElement;
val = li.parentElement.parentElement;

//get next sibling
val = li.nextSibling;
val = li.nextElementSibling.nextElementSibling;


//get prev sibling
val = li.prevSibling;
val = li.prevElementSibling;

console.log(val);

console.log("");
console.log("creating an ele");
console.log("");

const l = document.createElement('l');

//add class,id, attribute
l.className = 'l-class';
l.id = 'l-id';
l.setAttribute('title', 'new item');

//create something in it (txt node) n append
l.appendChild(document.createTextNode('hi world'))
    //console.log(l);

//create new link element
const link = document.createElement('a'); //anchor tag
link.className = "delete-item secondary-content";
//add icon html --why not textcontent tell me use differ search
link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);
//append child to ul
//list.appendChild(l);
document.querySelector('ul').appendChild(l);

//document.querySelector('ul.collection').appendChild(l); . class, #id
//x = document.querySelector('div.card').appendChild(l);
x = document.querySelector('div#main').appendChild(l);



console.log(x);