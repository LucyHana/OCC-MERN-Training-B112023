let start = parseInt(prompt("Enter the starting number:"));
let end = parseInt(prompt("Enter the ending number:"));
if (start > end) {
  console.log(
    "Invalid input. The starting number has to be bigger than the ending number"
  );
} else {
  console.log(`Numbers between ${start} and ${end}`);

  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
