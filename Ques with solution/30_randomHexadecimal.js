// 30. Write a script which generates a random hexadecimal number.

// 1st approach
function getRandomHexNumber() {
  return "#" + Math.random().toString(16).slice(2, 8);
}

const hex = getRandomHexNumber();
console.log(hex); // #0da4d3

// 2nd approach

function randomHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const hex2 = randomHex();
console.log(hex2); //#13df67
