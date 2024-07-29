function inArray(a1, a2) {
  // Crear un conjunto para almacenar resultados únicos (en caso de que sea necesario)
  const resultSet = new Set();

  // Iterar sobre cada cadena en a1
  for (let subStr of a1) {
    // Comprobar si la cadena actual de a1 es subcadena de alguna cadena en a2
    for (let str of a2) {
      if (str.includes(subStr)) {
        resultSet.add(subStr);
        break; // Salir del bucle interior si se encuentra una coincidencia
      }
    }
  }

  // Convertir el conjunto a un arreglo y ordenarlo lexicográficamente
  return Array.from(resultSet).sort();
}

// Ejemplo 1
const a1 = ["arp", "live", "strong"];
const a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2)); // ["arp", "live", "strong"]

// Ejemplo 2
const a1b = ["tarp", "mice", "bull"];
const a2b = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1b, a2b)); // []
