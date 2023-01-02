// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

countries = ["India", "USA", "Japan", "Ethiopia"];

function checkAndAdd(word) {
  if (countries.includes(word)) {
    console.log("ETHIOPIA");
  } else {
    countries.push(word);
    console.log("Ethiopia is now added!");
    console.log(countries);
  }
}

checkAndAdd("Ethiopia");
