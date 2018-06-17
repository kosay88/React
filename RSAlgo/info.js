// Strict mode:

// JavaScript can be made a little stricter by enabling strict mode.
// This is done by putting the string "use strict" at the top of a file or a function body. Here’s an example:
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}
canYouSpotTheProblem();
// → ReferenceError: counter is not defined

// classes:

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

// map is a class written to store a mapping and allow any type of keys
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);
console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false

// ------

// functions:

// freeze used to keep the value and ignore all changes:
let object = Object.freeze({value: 5});
object.value = 10;
console.log(object.value);
// → 5

// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;

// check the tybe of an opject:
console.log(Object.getPrototypeOf(Math.max) ==
            Function.prototype);
// → true
console.log(Object.getPrototypeOf([]) ==
            Array.prototype);
// → true

// a way to use functions:
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log);
// → 0
// → 1
// → 2

// -------

// sine and cosine:
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}

// phi function:
function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}
console.log(phi([76, 9, 4, 1]));
// → 0.068599434

// ------

// methods:

console.log(Math.floor(Math.random() * 10)); //random creat random number 0 < number < 10
// → 2

Math.max (maximum)
Math.min (minimum)
Math.sqrt (square root)

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
console.log(doh.toLowerCase());
// → doh

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5); //push adds values to the end of an array
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop()); //pop remove values from the end of an array
// → 5
console.log(sequence);
// → [1, 2, 3, 4]
let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift(); //shift adds values to the start of an array
}
function rememberUrgently(task) {
  todoList.unshift(task); //unshift remove values from the start of an array
}

delete arr.element;
delete arr[element];
 // delete an element from an arr

 console.log(Object.keys({x: 0, y: 0, z: 2})); //return the keys in the arr
 // → ["x", "y", "z"]

 let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4}); //assign copies all properties from one object into another
console.log(objectA);
// → {a: 1, b: 3, c: 4}

console.log([1, 2, 3, 2, 1].indexOf(2)); //search from the start and returns the index
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //search from the end and returns the index
// → 3

// slice method:
console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// → [2, 3, 4]
//using slice method to remove one vlue
function remove(array, index) {
  return array.slice(0, index)
    .concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

console.log("  okay \n ".trim()); //trim method removes whitespace
// → okay

console.log("LA".repeat(3)); //repeat to repeat value
// → LALALA

let numbers = [5, 1, 7];
console.log(max(...numbers)); //max to return the largest value in the arr
// → 7

//including var in the arr:
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

// ------

// loops:

// while loops :
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

// do loops :
let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
// This program will force you to enter a name.
// It will ask again and again until it gets something that is not an empty string

// -------

// conditions:

// switch/case/break:
switch (prompt("What is the weather like?")) {
  // case to give the order
  case "rainy":
    console.log("Remember to bring an umbrella.");
    // break to seberate cases
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
