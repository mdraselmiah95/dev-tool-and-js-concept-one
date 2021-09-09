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

// Synchronous

const first = () => console.log("Hi I am first");
const second = () => console.log("Hi I am second");
const third = () => {
  first();
  second();
  console.log("hi I am third");
};

const first = () => console.log("Hi I am first");
const second = () => console.log("Hi I am second");
const third = () => {
  second();
  first();
  console.log("hi I am third");
};

third();

//  Asynchronous
console.log("first");
setTimeout(() => {
  console.log("second");
}, 2000);
console.log("third");
