function bouncingBall(h, bounce, window) {
  // Verificar las condiciones iniciales
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let count = 1; // La madre ve la pelota al caer por primera vez

  while (h * bounce > window) {
    h *= bounce; // Actualizar la altura después del rebote
    count += 2; // La madre ve la pelota al subir y al bajar
  }

  return count;
}

// Ejemplo de uso:
console.log(bouncingBall(3, 0.66, 1.5)); // Devuelve 3
console.log(bouncingBall(3, 1, 1.5)); // Devuelve -1 (condición 2 no cumplida)
console.log(bouncingBall(30, 0.66, 1.5)); // Devuelve 15
console.log(bouncingBall(30, 0.9, 1.5)); // Devuelve 21
