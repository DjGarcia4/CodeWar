// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  let carry = 0;
  let result = [];

  while (a.length < b.length) a = "0" + a;
  while (b.length < a.length) b = "0" + b;

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result.push(sum % 10);
  }

  if (carry > 0) {
    result.push(carry);
  }
  return result.reverse().join("");
}
