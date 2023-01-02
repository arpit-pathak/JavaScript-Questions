// 23. Write a program which tells the number of days in a month, now consider leap year.

function getDaysInMonth(month, year) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      return 31;
    case "April":
    case "June":
    case "September":
    case "November":
      return 30;
    case "February":
      return isLeapYear(year) ? 29 : 28;
    default:
      return "Invalid month";
  }
}

function isLeapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

console.log(getDaysInMonth("January", 2020)); // Output: 31
console.log(getDaysInMonth("February", 2020)); // Output: 29
console.log(getDaysInMonth("February", 2021)); // Output: 28
console.log(getDaysInMonth("April", 2020)); // Output: 30
console.log(getDaysInMonth("June", 2020)); // Output: 30
console.log(getDaysInMonth("arpit", 2020)); // Output: Invalid month

// Second approach
// args  = month and year are in num value
function getDaysInMonth2(month, year) {
  const daysInMonth = new Date(year, month, 0).getDate();
  console.log(`Month no ${month} of ${year} has ${daysInMonth}`);
}

getDaysInMonth2(02, 2020);
getDaysInMonth2(02, 2023);
