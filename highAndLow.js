// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  // Convert the string into an array of numbers
  const numArray = numbers.split(" ").map(Number);

  // Find the highest number using Math.max
  const max = Math.max(...numArray);

  // Find the lowest number using Math.min
  const min = Math.min(...numArray);

  // Return the result as a string with the highest number first
  return `${max} ${min}`;
}

// Test examples
console.log(highAndLow("1 2 3 4 5")); // "5 1"
console.log(highAndLow("1 2 -3 4 5")); // "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // "9 -5"
console.log(highAndLow("42")); // "42 42"
console.log(highAndLow("-1 -2 -3 -4 -5")); // "-1 -5"
