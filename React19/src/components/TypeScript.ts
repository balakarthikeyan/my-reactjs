// Notice how we now provide a type for the argument! The return type is inferred, we don't need to put it explicitly
function sayHello(name: String): string {
  return `Hello ${name}`;
}

const names: String = "James"

console.log(sayHello(names))

function convertToString(coords: {x: number; y: number; z ?: number}) {
  return `${coords.x}.${coords.y}${coords.z === undefined ? "" : `.${coords.z}`}`
}

// Prints 1.2
console.log(convertToString({x: 1, y: 2}))

// Prints 1.2.3
console.log(convertToString({x: 1, y: 2, z: 3}))

function weirdArrayFunction(a: string[] | string) {
  return Array.isArray(a) ? "This is an array" : `In upper case: ${a.toUpperCase()}`
}

// Prints 'This is an array'
console.log(weirdArrayFunction(["one", "two", "three"]))

// Prints 'In upper case: TEST STRING'
console.log(weirdArrayFunction("test string"))

// Here we define our coordinates type
type Coordinates = {
  x: number; 
  y: number; 
  z ?: number
}

// Same function as previously using the type
function convertCoordinatesToString(coords: Coordinates) {
  return `${coords.x}.${coords.y}${coords.z === undefined ? "" : `.${coords.z}`}`
}

// Prints 1.2
console.log(convertCoordinatesToString({x: 1, y: 2}))

// Prints 1.2.3
console.log(convertCoordinatesToString({x: 1, y: 2, z: 3}))

// Defining a constant of that type
const coords: Coordinates = {x: 5, y: 6}

// Prints 5.6
console.log(convertCoordinatesToString(coords))

// Here we have two structurally equivalent types
type TypeOne = {
  a: string;
}
type TypeTwo = {
  a: string;
}

// We can assign one to the other, seeing as they
// have the same structure
const variableOne: TypeOne = {a: "A"};
const variableTwo: TypeTwo = variableOne; 

type TypeThree = {
  a: string;
  b: string;
}

// Same function as previously using the type
function convertTypeToString(t: TypeOne) {
  return `A value: ${t.a}`
}

console.log(convertTypeToString({a: "A"}))

// Here we declare our first vehicle interface.
interface Vehicle {
  name: string 
}

// Now we add a size field to the interface, keeping
// the existing ones
interface Vehicle {
  size: string
}

// Now we create a new interface with all of the old
// fields, but an extra one on top.
interface Car extends Vehicle {
  numberWheels: number
}

// Here car expects all three fields
const car: Car = {name: "Car", size: "M", numberWheels: 4}

// Vehicle can needs only two
const vehicle: Vehicle = {name: "Plane", size: "L"}

// This is the syntax for limiting our size variable to only
// one of three values
const size: 'S' | 'M' | 'L' = 'M'

// Here we have a function that only accepts
// our S, M, L arguments
function printSize(size: 'S' | 'M' | 'L') {
  console.log(size)
}

// Here we create a string with a valid value
const sizeString: string = 'M'

// Now we try and print the string. Unless we
// assert it is of the correct type the compiler
// will recognise it as a string and throw an error!
printSize(sizeString as 'M')

// Here we declare a type which maps to a function taking
// in a string and returning nothing
type ExampleFnType = (a: string) => void

// Here we use the type and declare a function which takes
// in a string and prints it
const exampleFn: ExampleFnType = a => console.log(a)

// Now we pass to something expecting an argument which is a
// function taking in a string and returning void. It then executes
// the function with the string 'Hello everyone!'
function executeFunction(fn: (a: string) => void) {
  fn("Hello everyone!");
}

// This prints 'Hello everyone!'. Notice how the structure of the
// ExampleFnType is the same as the method signature, and so this
// is a valid call
executeFunction(exampleFn)

// Here we define a function which can (or can not) take 
// a parameter
function functionOptionalParam(x?: number) {
  if(x) {
    console.log("x is defined")  
  } else {
    console.log("x is not defined")  
  }
}

// Prints 'x is not defined'
functionOptionalParam()

// Prints 'x is defined'
functionOptionalParam(7)

// Here we define a function which can (or can not) take 
// a parameter, but if one isn't supplied we'll use 10
function functionDefaultParam(x = 10) {
  console.log("x + 10 is " + (x + 10))
}

// Prints 'x + 10 is 20'
functionDefaultParam()

// Prints 'x + 10 is 17'
functionDefaultParam(7)

// Here we define a type
type Coords = { x: number; y: number; };

// Now we take in an object of type Coords, but
// use the destructuring syntax to be able to
// directly reference its parts
function sum({ x, y }: Coords) {
  console.log("Sum of coords is " + (x + y));
}

// Prints 'Sum of coords is 3'
sum({x: 1,y: 2})

// Creating a type with two read only fields. One
// is a string, the other an object with a single
// value
type ReadOnlyType = {
  readonly unchangeable: string,
  readonly changeable: {key: string}
}

// We can initialise a variable of the
// type here
const readOnly: ReadOnlyType = {
  unchangeable: "a",
  changeable: {key: "value one"}
}

// This wouldn't work as it's read only
// readOnly.unchangeable = "b"

// However, this is fine as we're not reassigning
// the type itself
readOnly.changeable.key = "value two"

// Create one type
type NameType = {
  name: string
}

// Create another type
type AgeType = {
  age: number
}

// Combine them! Note, we're not covering
// the case where both types had the same
// field!
type NameAndAgeType = NameType & AgeType

// Here we can receive a string or number, then
// depending on the type print a different result
function typeGuardFunction(x: string | number) {
  typeof x === "string" ? console.log("x is a string!") : console.log("x is a number!")
}

// Prints 'x is a string!'
typeGuardFunction("1")

// Prints 'x is a number!'
typeGuardFunction(1)