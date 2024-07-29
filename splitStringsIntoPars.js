function splitStringIntoPairs(str) {
  // Array para almacenar los pares de caracteres
  const pairs = [];

  // Iterar sobre la cadena en pasos de 2 caracteres
  for (let i = 0; i < str.length; i += 2) {
    // Tomar el par de caracteres
    let pair = str.slice(i, i + 2);

    // Si el par tiene solo un carácter, agregar un guion bajo
    if (pair.length === 1) {
      pair += "_";
    }

    // Añadir el par al array
    pairs.push(pair);
  }

  // Devolver el array con los pares
  return pairs;
}

console.log(splitStringIntoPairs("abc")); // Debería devolver ['ab', 'c_']
console.log(splitStringIntoPairs("abcdef")); // Debería devolver ['ab', 'cd', 'ef']
console.log(splitStringIntoPairs("a")); // Debería devolver ['a_']
console.log(splitStringIntoPairs("abcd")); // Debería devolver ['ab', 'cd']
