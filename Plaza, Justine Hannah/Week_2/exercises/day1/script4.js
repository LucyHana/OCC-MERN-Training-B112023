// Step 1
let students = [
  { name: "Lucy", age: "22", grade: "B" },
  { name: "Kize", age: "21", grade: "A+" },
  { name: "Lexie", age: "20", grade: "C" },
];

// Step 2
console.log(students[1].name);

// Step 3
let newStudent = { name: "Laplace", age: "23", grade: "A" };
students.push(newStudent);

// Step 4
for (let student of students) {
  console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}

// Step 5
let book = {
  title: "Fire & Blood",
  author: "George R.R. Martin",
  year: 2018,
};

// Step 6
console.log(book.title);

// Step 7
book.year = 2020;

// Step 8
book.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Step 9
console.log(book.getSummary());

// Step 10
let library = [];
library.push(book);

// Step 11
console.log(library);

// Step 12
let car = {
  brand: "Tesla",
  model: "Cybertruck",
  year: 2023,
};

// Step 13
console.log(car.model);

// Step 14
car.year = 2025;

// Step 15
car.startEngine = function () {
  console.log(`The ${this.brand}'s engine is starting.`);
};

// Step 16
car.startEngine();

// Step 17
let garage = [];
garage.push(car);

// Step 18
console.log(garage);

// Step 19
let person = { name: "Calvin", age: 24, city: "Manila" };

// Step 20
console.log(person.age);
