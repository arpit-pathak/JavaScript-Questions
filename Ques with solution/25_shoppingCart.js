/* 
25. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of you shopping cart if it has not been already added
    - remove 'Honey' if you are allergic to honey
    - modify Tea to 'Green Tea'
*/

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// addAtFirst
function addAtFirst(word) {
  // check if word is already is exists or not
  if (shoppingCart.includes(word)) {
    console.log(`${word} is already present in array`);
  } else {
    shoppingCart.unshift(word);
    console.log(`${word} is added in the beginning of array `);
    console.log(shoppingCart);
  }
}
addAtFirst("Meat");

// addAtLast
function addAtEnd(word) {
  if (shoppingCart.includes(word)) {
    console.log(`${word} is already present in array`);
  } else {
    shoppingCart.push(word);
    console.log(`${word} is added in the End of array `);
    console.log(shoppingCart);
  }
}
addAtEnd("jai");

// remove
// takes boolean value as a argument
function AreYouAllergic(allergic) {
  if (allergic) {
    const index = shoppingCart.indexOf("Honey");
    if (index !== -1) {
      shoppingCart.splice(index, 1);
      console.log("Honey is removed !");
      console.log(shoppingCart);
    }
  }
}
AreYouAllergic(false);

// modify
function modify(word, newWord) {
  if (shoppingCart.includes(word)) {
    const index = shoppingCart.indexOf(word);
    shoppingCart.splice(index, 1, newWord);
    console.log(`${word} is modified to ${newWord}`);
    console.log(shoppingCart);
  }
}

modify("Tea", "Green Tea");
