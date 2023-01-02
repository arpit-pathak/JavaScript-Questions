// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0;
let oddSum = 0;

for (i = 0; i <= 100; i++) {
  //if num is even
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`Sum of Even is ${evenSum} and Sum of Odd is ${oddSum}`);
