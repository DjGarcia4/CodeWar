const caminos = [
  "Casa de Alicia-Casa de Bob",
  "Casa de Alicia-Oficina de Correos",
  "Casa de Daria-Casa de Ernie",
  "Casa de Ernie-Casa de Grete",
  "Casa de Grete-Tienda",
  "Mercado-Oficina de Correos",
  "Mercado-Ayuntamiento",
  "Casa de Alicia-Cabaña",
  "Casa de Bob-Ayuntamiento",
  "Casa de Daria-Ayuntamiento",
  "Casa de Grete-Granja",
  "Mercado-Granja",
  "Mercado-Tienda",
  "Tienda-Ayuntamiento",
];

const rutaCorreo = [
  "Casa de Alicia",
  "Cabaña",
  "Casa de Alicia",
  "Casa de Bob",
  "Ayuntamiento",
  "Casa de Daria",
  "Casa de Ernie",
  "GCasa de Grete",
  "Tienda",
  "Casa de Grete",
  "Granja",
  "Mercado",
  "Oficina de Correos",
];

function construirGrafo(bordes) {
  let grafo = Object.create(null);
  function añadirBorde(desde, hasta) {
    if (grafo[desde] == null) {
      grafo[desde] = [hasta];
    } else {
      grafo[desde].push(hasta);
    }
  }
  for (let [desde, hasta] of bordes.map((c) => c.split("-"))) {
    añadirBorde(desde, hasta);
    añadirBorde(hasta, desde);
  }
  return grafo;
}

class EstadoPueblo {
  constructor(lugar, paquetes) {
    this.lugar = lugar;
    this.paquetes = paquetes;
  }

  mover(destino) {
    if (!grafoCamino[this.lugar].includes(destino)) {
      return this;
    } else {
      let paquete = this.paquetes
        .map((p) => {
          if (p.lugar != this.lugar) return p;
          return { lugar: destino, direccion: p.direccion };
        })
        .filter((p) => p.lugar != direccion);
      return new EstadoPueblo(destino, paquete);
    }
  }
}

let primero = new EstadoPueblo("Oficina de Correos", [
  { lugar: "Oficina de Correos", direccion: "Cassa de Alicia" },
]);

let siguiente = primero.mover("Casa de Alicia");

const grafoCamino = construirGrafo(roads);

function correrRobot(estado, robot, memoria) {
  for (let turno = 0; ; turno++) {
    if (estado.paquetes.length == 0) {
      console.log(`Listo en ${turno} turnos`);
      break;
    }
    let accion = robot(estado, memoria);
    estado = estado.mover(accion.direccion);
    memoria = accion.memoria;
    console.log(`Moverse ${accion.direccion}`);
  }
}

function eleccionAleatoria(array) {
  let eleccion = Math.floor(Math.random() * array.length);
  return array[eleccion];
}

function robotAleatorio(estado) {
  return { direccion: eleccionAleatoria(grafoCamino[estado.lugar]) };
}

EstadoPueblo.aleatorio = function (numeroDePaquetes = 5) {
  let paquetes = [];
  for (let i = 0; i < numeroDePaquetes; i++) {
    let direccion = eleccionAleatoria(Object.keys(grafoCamino));
    let lugar;
    do {
      lugar = eleccionAleatoria(Object.keys(grafoCamino));
    } while (lugar == direccion);
    paquetes.push({ lugar, direccion });
  }
  return new EstadoPueblo("Oficina de Correos", paquetes);
};

function robotRuta(estado, memoria) {
  if (memoria.length == 0) {
    memoria = rutaCorreo;
  }
  return { direction: memoria[0], memoria: memoria.slice(1) };
}

function encontrarRuta(grafo, desde, hasta) {
  let trabajo = [{ donde: desde, ruta: [] }];
  for (let i = 0; i < trabajo.length; i++) {
    let { donde, ruta } = trabajo[i];
    for (let lugar of grafo[donde]) {
      if (lugar === hasta) return ruta.concat(lugar);
      if (!trabajo.some((w) => w.donde === lugar)) {
        trabajo.push({ donde: lugar, ruta: ruta.concat(lugar) });
      }
    }
  }
}

function robotOrientadoAMetas({ lugar, paquetes }, ruta) {
  if (ruta.length == 0) {
    let paquete = paquetes[0];
    if (paquete.lugar != lugar) {
      ruta = encontrarRuta(grafoCamino, lugar, paquete.lugar);
    } else {
      ruta = encontrarRuta(grafoCamino, lugar, paquete.direccion);
    }
  }
  return { direccion: ruta[0], memoria: ruta.slice(1) };
}
