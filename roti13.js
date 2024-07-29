// Description:
// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

function rot13(str) {
  // Define a helper function to apply ROT13 to a single character
  function rotateChar(char) {
    const start = "A".charCodeAt(0); // 65
    const end = "Z".charCodeAt(0); // 90
    const offset = 13;

    // Check if character is an uppercase letter
    if (char >= "A" && char <= "Z") {
      const code = char.charCodeAt(0);
      return String.fromCharCode(((code - start + offset) % 26) + start);
    }

    // Check if character is a lowercase letter
    if (char >= "a" && char <= "z") {
      const code = char.charCodeAt(0);
      return String.fromCharCode(
        ((code - "a".charCodeAt(0) + offset) % 26) + "a".charCodeAt(0)
      );
    }

    // Non-alphabetical characters are returned as is
    return char;
  }

  // Apply ROT13 to each character of the string and join them together
  return str.split("").map(rotateChar).join("");
}

// Test examples
console.log(rot13("EBG13 rknzcyr.")); // "ROT13 example."
console.log(rot13("This is my first ROT13 excercise!")); // "Guvf vf zl svefg EBG13 rkprepvfr!"
