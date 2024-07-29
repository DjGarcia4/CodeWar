function digPow(n, p) {
  // Convert the number n to a string and then to an array of digits
  const digits = n.toString().split("").map(Number);

  // Calculate the sum of the digits raised to consecutive powers starting from p
  const sum = digits.reduce(
    (acc, digit, index) => acc + Math.pow(digit, p + index),
    0
  );

  // Check if the sum is divisible by n
  return sum % n === 0 ? sum / n : -1;
}
console.log(digPow(89, 1)); // Debería devolver 1
console.log(digPow(92, 1)); // Debería devolver -1
console.log(digPow(695, 2)); // Debería devolver 2
console.log(digPow(46288, 3)); // Debería devolver 51
