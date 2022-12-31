// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

var date = new Date();
console.log(date);

console.log(`Year today is ${date.getFullYear()}`);
console.log(`Month today is ${date.getMonth()}`);
console.log(`Date today is ${date.getDate()}`);
console.log(`day today as a number is ${date.getDay()}`);
console.log(`hours now is ${date.getHours()}`);
console.log(`Minutes is ${date.getMinutes()}`);
console.log(`seconds elapsed from January 1, 1970 to now = ${Date.now()}`);
