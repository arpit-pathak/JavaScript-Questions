// 22. Write a program which tells the number of days in a month (without leap year)

// ***** First approach *****
function getDaysInMonth(month) {
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
      return 28;
    default:
      return "Invalid month";
  }
}

// console.log(getDaysInMonth("January")); // Output: 31
// console.log(getDaysInMonth("February")); // Output: 28
// console.log(getDaysInMonth("April")); // Output: 30
// console.log(getDaysInMonth("June")); // Output: 30
// console.log(getDaysInMonth("Arpit")); // Output: Invalid month

// ***** Second approach *****

// takes month number as a argument
function getDaysInMonth2(month) {
  if (month > 0 && month <= 12) {
    const daysInMonth = new Date(2023, month, 0).getDate();
    console.log(`Month number ${month} has ${daysInMonth} days`);
  } else {
    console.log("Invalid Month number, should be (1-12)");
  }
}

getDaysInMonth2(0); //Invalid Month number, should be (1-12)
getDaysInMonth2(1); // Month number 1 has 31 days
getDaysInMonth2(2); // Month number 2 has 28 days
getDaysInMonth2(12); // Month number 12 has 31 days
