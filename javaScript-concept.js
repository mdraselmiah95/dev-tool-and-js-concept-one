/*
 1) How JavaScripts Work 
 2) Execution Context 
 3) Hoisting 
 4) Scope
 5) Lexical Scope 
 6) Scope Chaining 
 7) Closure 
 8) Synchronous & Asynchronous

*/

//Execution context

const name = "programming Hero";
function programming() {
  const x = 10;
  console.log(name);
  console.log("Codding");
}
programming();

// Creational Phase
// name = Programming hero;
// programming = ref
// x = undefine

//Steps of executing code

/* 
1. Source code
2. parser
3. Abstract window
4. machine code
5. execution

context=> 1. Creational phase
          2. Executional phase

*/

// 3. Hoisting

console.log(a); //a=undefine
var a = 11; //create a=undefine
console.log(a);

food();
function food() {
  console.log("Hi, i like Egg.");
}

console.log(a); // a = undefine
var a = 10; // create  a = undefine

// a = undefine

biriani();
function biriani() {
  console.log("Hi I am biriani");
}
