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

//local storage and session storage

const person = { name: "Hero", age: 3 };
const getItem = (property) => {
  for (let key in person) {
    if (key === property) {
      console.log(person[key]);
    }
  }
};
getItem("name");

const setItem = (property, value) => {
  person[property] = value;
};

setItem("ph", 123456);
console.log(person);
