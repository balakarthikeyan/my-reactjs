/* 
// Var
var happyDays = function(day){
    if(day === 'sunny') {
    var a = 'apples'; 
    }
    console.log(a); 
}
happyDays('sunny')

// Let
var happyDays = function(day){
    if(day === 'sunny') {
        let b = 'bananas'; 
    }
    console.log(b);
}
//happyDays('sunny')

// Const
var happyDays = function(day){
    if(day === 'sunny') {
        const c = 'cherries';
    }
    console.log(c);
}
//happyDays('sunny')

// Only declarations are hoisted
console.log(num);  
var num;
num = 6; 
//If you declare the variable after it is used, but initialize it beforehand, it will return the value
num = 6;
console.log(num); // returns 6
var num;

//One of the advantages of JavaScript putting function declarations into memory before it executes any code segment is that it allows you to use a function before you declare it in your code. 

plantName("Tulip");
function plantName(name) {
  console.log("My plant name is " + name);
}
*/

// JS principles 
// Goes throught the code and runs/execute each line - knonwn as thread
// Saves data like strings and arrays so we can use that data later - in memory
// Functions - 
// Execution Context 
// created to run the code of a function - has 2 parts 
// - Thread of Execution 
// - Memory
// Call Stack 
// - Javascript keeps track of what function is currently running 
// - Run a function - add to call stack
// - Finish running the function - JS removes it from call stack
// - whatever is top of the call stack 
// - thats the functin we're currently running 

// Call backs and Higher Order functions 
// - Code more declarative and readable
// - Enables powerful functions like map, filter

// Generalize function - and pass specific instructions only when we run copyArayAndManipulate
// HOW WAS THIS POSSIBLE ?
// FUNCTIONS IN JAVASCRIPT = FIRST CLASS OBJECTS
// THEY CAN CO-EXIST AND CAN BE TREATED LIKE ANY OTHER JAVASCRIPT OBJECT
// 1. ASSIGNED TO VARIABLES AND PROPERTIES OF OTHER OBJECTS 
// 2. PASSED AS ARGUMENTS TO FUNCTIONS
// 3. RETURNED AS VALUES FROM FUNCTIONS
function copyArrayAndMultiplyBy2(array, instructions){
    const output = []
    for(let i=0; i< array.length; i++){
        output.push(instructions(array[i]))
    }
    return output
}
function MultiplyBy2(input) {  return input * 2 }
const result = copyArrayAndMultiplyBy2([1,2,3] , MultiplyBy2)
console.log(result);

// Introducing arrow functions - a shorthand way to save functions - ES6 
// const mulltiplyBy2 = (input) => { return input * 2 }
// const mulltiplyBy2 = (input) =>  input * 2
// const mulltiplyBy2 = input => input * 2

//Anonymous and arrow functions 
// - improve immediate legibiliy of code 
// - understanding how they are working is difficult 
// - => are syntactic sugar for funtions
const result1 = copyArrayAndMultiplyBy2([1,2,3] ,  input => input * 2 );
console.log(result1);

//Closure 
// Enables powerful pro -leve functions like memoize
// Many javascript design patterns including the module pattern use closure
// Build iterators , handle partial application and mantain state in an asynchronous 

//Function with memories 
// - when our function get called , we create a live store of data (local memory / variable environment /state) for that functions execution context 
// - When the function finishes executing , its local memory is deleted (except the return value)
// - But what if our functions could hold on to live data between executions ?
// - This would let our function definitions hav an associated cache/persistent memory
// - But it all starts with us returning a function from another function 

function outer(){
    var  counter = 0 
    function incrementCounter(){ return  counter++ }
    console.log(counter);
    return incrementCounter;
 }
 
 const myNewFunction = outer()
 
 myNewFunction()

 //Closure gives our functions persistent memories and entirely new toolkit for writing professional code 
 // - Helper Functions : memoize 
 // - Module pattern  - preserve the state for the life of an application without polluting the global namespace 
 // - Async js 