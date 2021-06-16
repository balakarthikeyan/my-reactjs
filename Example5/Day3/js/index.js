/* "use strict";

//Constant value
const name = "Bala";
//Let Variable
//let age = 30;

//ES6 function
let sum = (a, b) =>  {
    return (a+b);
}
console.log(sum(10, 40));

//Implictly returns directly
let printName = (name) => `My name is ${name}`; 
console.log(printName('Balakarthikeyan'));

//Object refernece 
let friend1 = {
    name: "xyz",
    contact: 9751214228
}
// var friend2 = friend1;
// friend2.name ="abc";
// console.log(friend1);
// console.log(friend2);
let friend2 = {...friend1};
friend2.name ="abc";
console.log(friend1);
console.log(friend2);

//Array refernece 
let arr1 = [1,2,3];
let arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);

const addition = (a, b, callback) =>  {
    let c =  a+b;
    callback(c);
}
const callback = (c) => console.log(`Sum ${c}`);
console.log(addition(10, 40, callback));

const orderPizza = (flavor, callback) => {
    console.log(`I want a ${flavor} pizza`);
    callback();
}
const layTheTable = _ => console.log('laying the table');
orderPizza('Hawaiian', layTheTable);

const numbers = [3, 4, 10, 20]
const lesserThanFive = numbers.filter(num => num < 5);
console.log(lesserThanFive); 

//Task 1
function makePerson(name, age) {
    let makeperson = {};
    makeperson.name = name;
    makeperson.age = age;
    makeperson.print = function() {
		console.log(`${this.name} age is ${this.age}`);
	}
    return makeperson;
}
const vicky = makePerson('Vicky', 24);
console.log(vicky.name);
console.log(vicky.age);
vicky.print();

//Task 2
const personStore = {
	greet() {
		console.log(`Hello Constructor Function`);
    }
}
personStore.greet();

//Task 3
const personGreeting = {
    greet: function(c) {
        console.log(`Hello ${c}`);
    }
}
function personFromPersonStore(name) {
    let makeperson = Object.create(personGreeting);
    makeperson.name = name;
    return makeperson;
}
const sandra = personFromPersonStore('Sandra');
sandra.greet(sandra.name);

//Task 4
function PersonConstructor() {}
PersonConstructor.prototype.greet = function() {
    console.log('Hello Prototype');
}
const simon = new PersonConstructor();
simon.greet();

//Task 5
class PersonClass {
	constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const george = new PersonClass('George');
george.greet();

function a(cb){
    setTimeout(function(){
        console.log("from a")
        cb()
    }, 3000)
}

// function b(){
//     console.log("from b")
// }

a(() => {
    console.log("from b")
}); */