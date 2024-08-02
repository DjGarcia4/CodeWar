// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

function permutations(string) {
  function permute(s, prefix = "") {
    if (s.length === 0) {
      result.add(prefix);
    } else {
      for (let i = 0; i < s.length; i++) {
        permute(s.slice(0, i) + s.slice(i + 1), prefix + s[i]);
      }
    }
  }

  const result = new Set();

  permute(string);
  return Array.from(result);
}
