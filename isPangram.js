function isPangram(string) {
  // Convertir a minúsculas para que la comparación sea insensible al caso
  string = string.toLowerCase();

  // Crear un Set para almacenar las letras únicas encontradas
  const letters = new Set();

  // Iterar sobre cada carácter de la cadena
  for (let char of string) {
    // Verificar si el carácter es una letra (a-z)
    if (char >= "a" && char <= "z") {
      // Añadir la letra al Set (solo se añaden valores únicos)
      letters.add(char);
    }
  }

  // Verificar si el tamaño del Set es 26 (lo que significa que contiene todas las letras del alfabeto)
  return letters.size === 26;
}

// Ejemplos de uso
console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true
console.log(isPangram("Hello World")); // false
