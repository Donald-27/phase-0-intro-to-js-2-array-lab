// Define the cats array
const cats = ["Milo", "Otis", "Garfield"];

// Functions that modify the cats array directly
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Functions that return a new array without modifying the original cats array
function appendCat(name) {
  return [...cats, name]; // Creates a new array with name added at the end
}

function prependCat(name) {
  return [name, ...cats]; // Creates a new array with name added at the beginning
}

function removeLastCat() {
  return cats.slice(0, -1); // Creates a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1); // Creates a new array without the first cat
}
module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat,
  };
  