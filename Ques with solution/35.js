// 35. Write a functions which checks if all items are unique in the array.

function isArrayUnique(arr) {
  const uniqueArray = new Set(arr);
  if (uniqueArray.size === arr.length) console.log("All items are unique");
  else console.log("Duplicate elements are present");
}

isArrayUnique([1, 2, 3, 4, 5]); //All items are unique
isArrayUnique([1, 5, 2, 3, 4, 5]); //Duplicate elements are present
