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
//creational phase
// b = ref

//executional phase
// biriani()

// console.log(b)
// const b = 20;

// creational phase
// a = undefine

//executional phase
// a =  10

// Scope
// ==> scope হচ্ছে একটা এরিয়া যেখান থেকে একটা ভ্যারিয়েবল / ফাংশনকে এক্সেস করা যায়।

// Global Scope

// ==> যেখানে কোন ভ্যারিয়েবল/ ফাংশনকে ডিক্লেয়ার করলে সব জায়গা থেকে এক্সেস করা যায়

const x = 15;
function hi() {
  var y = 20;
  console.log(x);
  console.log(y);
}

function c() {
  console.log("I am code.");
}
