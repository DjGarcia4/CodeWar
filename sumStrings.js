// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

function sumStrings(a, b) {
  while (a.length < b.length) a = "0" + a;
  while (b.length < a.length) b = "0" + b;

  let carry = 0;
  let result = "";

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result = carry + result;
  }

  while (result[0] === "0" && result.length > 1) {
    result = result.slice(1);
  }

  return result;
}
