/*20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-79, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
    */

function getGrade(score) {
  if (score >= 80 && score <= 100) {
    return "A";
  } else if (score >= 70 && score <= 79) {
    return "B";
  } else if (score >= 60 && score <= 69) {
    return "C";
  } else if (score >= 50 && score <= 59) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(85)); // Output: A
console.log(getGrade(75)); // Output: B
console.log(getGrade(65)); // Output: C
console.log(getGrade(55)); // Output: D
console.log(getGrade(45)); // Output: F

// without if-else

// function getGrade(score) {
//   const grades = ["F", "D", "C", "B", "A"];
//   const thresholds = [50, 60, 70, 80, 100];

//   for (let i = 0; i < thresholds.length; i++) {
//     if (score < thresholds[i]) {
//       return grades[i];
//     }
//   }
// }
// console.log(getGrade(85)); // Output: A
// console.log(getGrade(75)); // Output: B
// console.log(getGrade(65)); // Output: C
// console.log(getGrade(55)); // Output: D
// console.log(getGrade(45)); // Output: F
