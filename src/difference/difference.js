export function difference(array = [], values = []) {
  return array.filter((item) => !values.includes(item));
}

// Test cases
console.log(difference([2, 1], [2, 3])); // Output: [1]
console.log(difference([1, 2, 1], [2, 3])); // Output: [1]
