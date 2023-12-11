// function namedFunction() {
//   console.log("Hello! I am a named function");
// }

// namedFunction();

// let anonymousFunction = function () {
//   console.log("Hello! I am an anonymouse function");
// };

// anonymousFunction();

// const getRandomNumber = () => Math.random();
// console.log(getRandomNumber());

// function addNumbers(a, b) {
//   return a + b;
// }

// console.log(addNumbers(5, 10));

// const square = (x) => x * x;
// console.log(square(2));

// const multiply = (a, b) => {
//   let result = a * b;
//   console.log("The result is:" + result);
// };

// multiply(5, 2);

// const global = "I am a global variable";

// function functionOne() {
//   console.log(global);
// }

// functionOne();

// const functionTwo = () => {
//   let local = "I am a local variable";
//   console.log(local);
// };

// functionTwo();

// const square = (num, callback) => {
//   const result = num * num;
//   callback(result);
// };

// const logResult = (result) => console.log("The result is:", result);

// square(5, logResult);

// const square = (num) => {
//   const result = num * num;
//   return result;
// };

// const squaredValue = square(5);
// console.log("The result is:", squaredValue);

// const person = {
//   name: "Garfield",
//   age: 25,
//   greet: function () {
//     console.log(`Hello! My name is ${this.name}, I am ${this.age} years old.`);
//   },
// };

// console.log(person.name);
// person.greet();

// let myPar = document.getElementsByTagName("p")[0].innerHTML;
// let sir = document.getElementById("Al").innerHTML;
// let myNum = parseInt(document.getElementsByClassName("students")[0].innerHTML);

// myNum - myNum + 2;

// document.getElementsByClassName("students")[1].innerHTML = myNum;

// let hello = document.getElementsByTagName("h1")[0].innerHTML;
// console.log(hello);

// console.log(sir);
// console.log(myPar);
// console.log(myNum);
// console.log(typeof myNum);

// let calcu = parseInt(document.getElementsByClassName("practice")[0].innerHTML);
// calcu += 10;
// console.log(calcu);

let inputName = document.forms["myForm"]["myName"].value;

function checkForm() {
  if (inputName == "") {
    alert("Name cannot empty");
    return false;
  }
}

// counter

let myNumber = parseInt(document.getElementsByTagName("h1")[1].innerHTML);

let add = () => {
  myNumber++;
  return (document.getElementsByTagName("h1")[1].innerHTML = myNumber);
};

let minus = () => {
  myNumber--;
  return (document.getElementsByTagName("h1")[1].innerHTML = myNumber);
};

console.log(myNumber);
console.log(typeof myNumber);

const li = document.createElement("li");
const node = document.createTextNode("This is a list item");
li.appendChild(node);

const parent = document.getElementsByTagName("ul")[0];

parent.appendChild(li);

console.log(li);
console.log(typeof li);
