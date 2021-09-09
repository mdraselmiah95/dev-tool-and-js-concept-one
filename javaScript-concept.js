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
  //local Scope or block scope
  //  যেখানে কোন ভ্যারিয়েবল/ ফাংশনকে ডিক্লেয়ার করলে এর বাহির থেকে এক্সেস করা যায় না

  //   var y = 20;
  console.log(x);
  //   console.log(y);
}

function c() {
  console.log("I am code.");
}
hi();
c();
// console.log(y);

// 6. Scope Chaining

function steveKaku() {
  billGatesKaku();
  console.log("Hello i am steve jobs");
}

function billGatesKaku() {
  markZuckerbergKaku();
  console.log("Hello i am  bill Gates");
}

function markZuckerbergKaku() {
  console.log("Hello i am markZuckerbergKaku");
}

const charlesBabbage = "Ami togo bap Charles Babbage";
steveKaku();
console.log(charlesBabbage);

// global scope -- stevekaku

// Closure

function parent() {
  const x = 10;

  return function () {
    const y = 20;
    console.log(x + y); // x = parent function er bhitore
  };

  // console.log(y); // y = child function er bhitore
}

const grandParent = parent();
grandParent();

// parent function er vhitore kono variable or function touri korle child function theke acess kora jay , kintu
// child function er vhitore kono variable or function touri korle parent theke acess kora jay na

function a() {
  const x = 11;
  return "something";
}
// console.log(x);
console.log(a());

// 8. Synchronous & Asynchronous

//Synchronous
console.log("I am First");
console.log("I am Second");
console.log("I am Third");
console.log("I am fourth");

// Asynchronous

console.log("I am First");

setTimeout(() => {
  console.log("I am second");
}, 2000);

setTimeout(() => {
  console.log("I am third");
}, 1000);

console.log("I am fourth");

function api(numbers) {
  const result = numbers.filter((element) => element > 20);
  return result;
}

const numbers = [11, 4, 32, 64, 54, 89, 99];
api(numbers);

function api(book) {
  const books = ["javascript", "react", "php", "css"];
  const result = books.filter((element) => element == book);
  return result;
}

console.log(api("php"));

fetch().then((response) => response.json());

/* 
regular expression two special characters:

/(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/;

 */

// Regex to validate password strength

/* 

My password strength criteria is as below :

8 characters length
2 letters in Upper Case
1 Special Character (!@#$&*)
2 numerals (0-9)
3 letters in Lower Case
Can somebody please give me regex for same. All conditions must be met by password .
 */

//^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$

//example
/* 
/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test('ama12YU$')
true
*/

// second part part

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
