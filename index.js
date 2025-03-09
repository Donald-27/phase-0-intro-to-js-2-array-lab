// Write your solution here!
// Define the initial cats array
let cats = ["Milo", "Otis", "Garfield"];

// Function to append a cat to the end of the array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to prepend a cat to the beginning of the array (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to remove the last cat from the array (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to remove the first cat from the array (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Function to append a cat to the end of the array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// Function to prepend a cat to the beginning of the array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// Function to remove the last cat from the array (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// Function to remove the first cat from the array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}

// Exporting the functions and the `cats` array
module.exports = {
  cats, // Ensure this is exported!
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
