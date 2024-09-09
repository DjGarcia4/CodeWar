// Digamos que tienes una función multiplicacionPrimitiva que, en el 20 por ciento de los casos, multiplica dos números, y en el otro 80 por ciento,
// genera una excepción del tipo FalloUnidadMultiplicadora. Escribe una función que envuelva esta torpe función y solo siga intentando hasta que una llamada tenga éxito, después de lo cual retorna el resultado.

// Asegúrete de solo manejar las excepciones que estás tratando de manejar.

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) {
        throw e;
      }
    }
  }
}

console.log(8, 8);

// La caja bloqueada
// Considera el siguiente objeto (bastante artificial):

// const caja = {
//   bloqueada: true,
//   desbloquear() { this.bloqueada = false; },
//   bloquear() { this.bloqueada = true;  },
//   _contenido: [],
//   get contenido() {
//     if (this.bloqueada) throw new Error("Bloqueada!");
//     return this._contenido;
//   }
// };
// Es solo una caja con una cerradura. Hay un array en la caja, pero solo puedes accederlo cuando la caja esté desbloqueada. Acceder directamente a la propiedad privada _contenido está prohibido.

// Escribe una función llamada conCajaDesbloqueada que toma un valor de función como su argumento, desbloquea la caja, ejecuta la función y luego se asegura de que la caja se bloquee nuevamente antes de retornar, independientemente de si la función argumento retorno normalmente o lanzo una excepción.

// const caja = {
//   bloqueada: true,
//   desbloquear() { this.bloqueada = false; },
//   bloquear() { this.bloqueada = true;  },
//   _contenido: [],
//   get contenido() {
//     if (this.bloqueada) throw new Error("Bloqueada!");
//     return this._contenido;
//   }
// };

// function conCajaDesbloqueada(cuerpo) {
// Tu código aqui.
// }

// conCajaDesbloqueada(function() {
//   caja.contenido.push("moneda de oro");
// });

// try {
//   conCajaDesbloqueada(function() {
//     throw new Error("Piratas en el horizonte! Abortar!");
//   });
// } catch (e) {
//   console.log("Error encontrado:", e);
// }
// console.log(caja.bloqueada);
// → true
// Por puntos extras, asegúrete de que si llamas a conCajaDesbloqueada cuando la caja ya está desbloqueada, la caja permanece desbloqueada.

const box = new (class {
  locked = true;
  #content = [];

  unlock() {
    this.locked = false;
  }
  lock() {
    this.locked = true;
  }
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
})();

function withBoxUnlocked(body) {
  let locked = box.locked();
  if (locked) box.unlock();
  try {
    return body();
  } finally {
    if (locked) box.lock();
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);
