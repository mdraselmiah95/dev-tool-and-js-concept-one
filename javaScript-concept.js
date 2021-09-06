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
