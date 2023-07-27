// import { sortNumbers } from './sort-numbers.js';

/*
  anything goes in this file, it's yours to make mistakes and be messy
    you don't need to lint this file, it's only for you
    but formatting the sandbox can make things easier to read

  you can do any experiments you like to explore or debug your function
    the .spec.js file is for tests and final validation only, not experiments
    the main file should include only the exported function and jsdoc string
*/

function sortNumbers(numbers) {
  // Step 1: Create a shallow copy of the original array to avoid side-effects
  const sortedArray = numbers.slice();

  // Step 2: Use the .sort() method with a callback to sort the numbers
  // The callback takes two numbers (a and b) and returns their difference (a - b).
  // This will sort the numbers from smallest to largest.
  sortedArray.sort((a, b) => a - b);

  // Step 3: Return the sorted array
  return sortedArray;
}

const allProducts = [
  { name: 'teddy bear', price: 3 },
  { name: 'milk', price: 1 },
  { name: 'light bulb', price: 2 },
];

// Extract the prices from allProducts
const prices = allProducts.map((product) => product.price);

// Sort the prices using the sortNumbers function
const sortedPrices = sortNumbers(prices);

// Convert the sorted prices to an array of strings with the currency symbol
const priceStrings = sortedPrices.map((price) => `${price}.0 €`);

console.log(priceStrings); // ['1.0 €', '2.0 €', '3.0 €']

const originalNumbers = [10, 4, 7, 1, 9, 3];

const sortedNumbers = originalNumbers.slice();

sortedNumbers.sort((a, b) => a - b);

console.log(sortedNumbers);
