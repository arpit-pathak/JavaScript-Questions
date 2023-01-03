/*
27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// ****** 1. Sort the array and find the min and max age
function sortMinMax(array) {
  //    sort in ascending order
  ages.sort(function (a, b) {
    return a - b;
  });

  console.log(`sorted array is = ${ages}`);
  console.log(`Max age is = ${Math.max(...ages)}`);
  console.log(`Min age is = ${Math.min(...ages)}`);
}

sortMinMax(ages); // prints sorted array with Max and Min age

// ****** 2. Find the median age(one middle item or two middle items divided by two)
function findMedianAge(array) {
  // mid point of array
  const median = Math.floor(array.length / 2);
  // sort the array
  const numbers = array.sort((a, b) => {
    return a - b;
  });
  // mid value of array
  return array.length % 2 !== 0
    ? numbers[median]
    : (numbers[median - 1] + numbers[median]) / 2;
}

const median = findMedianAge(ages);
console.log(`Median age is = ${median}`); // gives median age

// ****** 3. Find the average age(all items divided by number of items)
function getAvg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`Average is ${sum / arr.length}`);
}

getAvg(ages); // gives average of array

// ****** 4.Find the range of the ages(max minus min)
function range(arr) {
  const maxAge = Math.max(...arr);
  const minAge = Math.min(...arr);
  const range = maxAge - minAge;
  console.log(`Range is = ${range}`);
}

range(ages); // prints range

// ****** 5.Compare the value of (min - average) and (max - average), use abs() method

function compareAbs(arr) {
  const minAge = Math.min(...arr);
  const maxAge = Math.max(...arr);
  const sum = arr.reduce((a, b) => a + b);
  const avg = sum / arr.length;

  const minDiff = Math.abs(minAge - avg);
  const maxDiff = Math.abs(maxAge - avg);

  if (minDiff > maxDiff)
    console.log(
      "The difference between the minimum age and the average age is greater than the difference between the maximum age and the average age."
    );
  else if (maxDiff > minDiff)
    console.log(
      "The difference between the maximum age and the average age is greater than the difference between the minimum age and the average age."
    );
  else
    console.log(
      "The difference between the minimum age and the average age is equal to the difference between the maximum age and the average age."
    );
}

compareAbs(ages);
