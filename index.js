// second part part

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

const first = () => console.log("Hi I am first");
const second = () => console.log("Hi I am second");
const fourth = () => console.log("Hi I am fourth");
const third = () => {
  first();
  setTimeout(second, 4000);
  setTimeout(fourth, 3000);
  console.log("hi I am third");
};
third();
