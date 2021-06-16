"use strict";

// FUNCTIONS

// TASK1 
// Create a function that takes an integer and returns 
// true if it's divisible by 100, otherwise return false.

function divisibleBy100(recordIds) {
    var result = (recordIds%100) ? false : true;
    console.log(result);
}

// OUTPUT
divisibleBy100(1);
divisibleBy100(1000);
divisibleBy100(100);


// TASK 2
// Write a function to reverse an array.
function reverseString(recordIds) {
    console.log(recordIds.length > 1 ? Array.prototype.reverse.call(recordIds) : "Provide a valid Array");
}

reverseString([1, 2, 3, 4]);
reverseString([9, 9, 2, 3, 4]);
reverseString([]);

// ARRAY METHODS

// TASK 3
// Use array methods to print name and count
var shoppingList = [
    { name: "celery", count: 10 },
    { name: "limes", count: 5 },
    { name: "lemons", count: 7 },
    { name: "oranges", count: 2 }
];

function arrayToString(recordIds) {
    for(var i in shoppingList) {
        console.log(shoppingList[i].count +' ' + shoppingList[i].name +  ' in basket');
    }
}

arrayToString();

// OUTPUT
// 10 celery in basket 
// 5 limes in basket 
// 7 lemons in basket 
// 2 oranges in basket 

// TASK 4
var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

function printRecords(recordIds) {
    for(var j = 0; j <= currentEnrollment.length; j++ ) {
        var recordid = currentEnrollment[j];
        for(var i in studentRecords) {
            if(studentRecords[i].id == recordid) {
                var varPaid  = studentRecords[i].paid ? "Paid" : "Not Paid";
                console.log(studentRecords[i].name +' ( ' + studentRecords[i].id +  ' ) ' + varPaid );
                break;
            }
        }
    }
}

printRecords();

// printRecords(currentEnrollment);

// //OUTPUT as below 
// /*
// 	Bob (664): Not Paid
// 	Henry (105): Not Paid
// 	Sarah (375): Paid
// 	Suzy (410): Paid
// 	*/


// HOSITING

// Go through the challenges and try to predict what you'll see printed on the console. 
// As you progress, uncomment the challenge you're working on, 
// comment out the challenges you've completed, then run the code

// TASK 5  
console.log("this one is " + thisOne + " and that one is " + thatOne );
var thisOne = 'assigned-1';

// TASK 6  

thatOne = 'assigned-2';
console.log("this one is " + thisOne + " and that one is " + thatOne );
var thisOne = 'an otter';
var thatOne = 'an ocelot';

// TASK 7 
thisOne = 'assigned-3';
thatOne = 'assigned-4';
console.log("this one is " + thisOne + " and that one is " + thatOne );
var thisOne = 'a meerkat';
var thatOne = 'a mongoose';

// Let's try with a function declaration and a function expression
 
// TASK 8 
doAllTheThings();

// TASK 9
var doAllTheThings = function() {
    console.log("We did all the things! As Variable");
}
doAllTheThings();

// TASK 10
function doAllTheThings() {
    console.log("We did all the things!");
}
doAllTheThings();

// TASK 11
var rgbToHex = function (rgb) { 
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
            hex = "0" + hex;
    }
    return hex;
}
function fullColorHex (r,g,b) { 
    var red = rgbToHex(r); 
    var green = rgbToHex(g); 
    var blue = rgbToHex(b); 
    return red+green+blue; 
}
//fullColorHex(r,g,b);

var i = 0;
setTimeout( function() {
    var htmlRes = document.getElementById("result");
    htmlRes.innerHTML  = "Hello im running for every 1 sec";
}, 1000);

//Set Time
setInterval(function(){
    var timeDate = document.getElementById("timeDate");
    timeDate.innerHTML = new Date();
});

// TASK 12
// Render an image using HTML with id=myImg
// Add an event listner to HTML button
// on click change the image url
function renderMyImage() {
    document.getElementById('myImg').innerHTML = '<img src="images/sample.jpg" alt="Hello world" />';
}

//Generate Random color 
const generateColorValue = function(){
    return Math.floor(Math.random()* 256)
}
const createColor = function(){
    const red = generateColorValue();
    const green = generateColorValue()
    const blue = generateColorValue()
    return `rgb(${red},${green}, ${blue})`
}
const applyColorToBody = function(color){
    return document.getElementById('result').style.backgroundColor = color
}
const addRandomColorToBg = function (){
    const color = createColor()
    return applyColorToBody(color)
}
const interval = setInterval( addRandomColorToBg, 2000)
const newColors = document.getElementById('new-colors')
// newColors.onclick = ()=> addRandomColorToBg()
newColors.addEventListener('click' , ()=>clearInterval(interval))
// of body element every 2 seconds