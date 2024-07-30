// Define a function that takes in two non-negative integers
// a
// a and
// b
// b and returns the last decimal digit of
// a
// b
// a
// b
//  . Note that
// a
// a and
// b
// b may be very large!

// For example, the last decimal digit of
// 9
// 7
// 9
// 7
//   is
// 9
// 9, since
// 9
// 7
// =
// 4782969
// 9
// 7
//  =4782969. The last decimal digit of
// (
// 2
// 200
// )
// 2
// 300
// (2
// 200
//  )
// 2
// 300

//  , which has over
// 1
// 0
// 92
// 10
// 92
//   decimal digits, is
// 6
// 6. Also, please take
// 0
// 0
// 0
// 0
//   to be
// 1
// 1.

// You may assume that the input will always be valid.

// Examples
// lastDigit(4n, 1n)            // returns 4n
// lastDigit(4n, 2n)            // returns 6n
// lastDigit(9n, 7n)            // returns 9n
// lastDigit(10n,10000000000n)  // returns 0n

function lastDigit(n, m) {
  if (m === 0n) return 1n;

  const lastDigitN = n % 10n;

  if (lastDigitN === 0n) return 0n;

  const cycles = {
    1: [1],
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1],
    0: [0],
  };

  const cycle = cycles[Number(lastDigitN)];
  const cycleLength = BigInt(cycle.length);
  const index =
    m % cycleLength === 0n ? cycleLength - 1n : (m % cycleLength) - 1n;

  return BigInt(cycle[Number(index)]);
}
