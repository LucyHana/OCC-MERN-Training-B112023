let score = parseInt(prompt("Enter the score:"));
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80 && score <= 89) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else {
  grade = "F";
}
console.log("The grade for the score " + score + " is: " + grade);
