// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(ip1, ip2) {
  // Función para convertir una IP a un número entero
  function ipToNumber(ip) {
    return ip
      .split(".")
      .reduce((acc, octet) => acc * 256 + parseInt(octet, 10), 0);
  }

  // Convertir ambas IPs a números enteros
  const num1 = ipToNumber(ip1);
  const num2 = ipToNumber(ip2);

  // Calcular la diferencia entre los números, incluyendo la primera IP y excluyendo la última IP
  return num2 - num1;
}
