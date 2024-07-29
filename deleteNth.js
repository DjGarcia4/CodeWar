// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(order, maxE) {
  const result = [];
  const counts = {};

  for (const num of order) {
    // Get the current count of the number, default to 0 if not found
    const currentCount = counts[num] || 0;

    if (currentCount < maxE) {
      result.push(num);
      counts[num] = currentCount + 1; // Increment the count for the number
    }
  }

  return result;
}

const a1 = [1, 2, 3, 1, 2, 1, 2, 3];
const n1 = 2;
console.log(deleteNth(a1, n1)); // Output: [1, 2, 3, 1, 2, 3]

const a2 = [20, 37, 20, 21];
const n2 = 1;
console.log(deleteNth(a2, n2)); // Output: [20, 37, 21]
