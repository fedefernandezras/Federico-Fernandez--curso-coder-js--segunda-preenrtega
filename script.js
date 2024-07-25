const reglas = [
  { id: 1, nombre: "como crear un personaje", categoria: "creacion de personaje", texto: "un personaje....etc" },
  { id: 2, nombre: "subiendo de nivel y clases", categoria: "creacion de personaje", texto: "las clases son....etc" },
  { id: 3, nombre: "reglas de combate cuerpo a cuerpo", categoria: "como se combate", texto: "conocido como combate a mele....etc" },
  { id: 4, nombre: "reglas de combate a distancia", categoria: "como se combate", texto: "dispara de lejo....etc" },
  { id: 5, nombre: "como utilizar objetos", categoria: "equipamento", texto: "los objetos....etc" },
  { id: 6, nombre: "equipa tu personaje", categoria: "equipamento", texto: "las armas....etc" },
  { id: 7, nombre: "como hablar con otros personajes", categoria: "mecanicas de interaccion", texto: "para ello....etc" },
  { id: 8, nombre: "como realizar prueba de habilidad", categoria: "mecanicas de interaccion", texto: "si intentas saltar....etc" },
  { id: 9, nombre: "reglas de movimiento en mapa", categoria: "viajando por el mapa", texto: "dependiendo de la distancia....etc" },
  { id: 10, nombre: "explora sitios de interes", categoria: "viajando por el mapa", texto: "puedes investigar....etc" },
]

let opcion = Number(
  prompt("Ingrese para leer el tutorial de reglas\n1 - leer reglas\n2 - filtrar reglas por categoria\n3 - cuanto he leido?\n0 - salir")
)
let aprendido = []

while (opcion !== 0) {
  if (opcion === 1) {
    let idregla = Number(
      prompt("selecione que reglamento leer por ID:\n" + listar(reglas))
    )
    if (reglas.some((regla) => regla.id === idregla)) {
      let reglaBuscada = reglas.find(
        (regla) => regla.id === idregla
      )
      let indiceleido = aprendido.findIndex(
        (regla) => regla.id === idregla
      )
      alert(reglaBuscada.texto)
      if (indiceleido === -1) {
        aprendido.push({
          id: reglaBuscada.id,
          nombre: reglaBuscada.nombre,
          leido: reglaBuscada.leido,
        })
      }

      console.log(aprendido)

      opcion = Number(
        prompt(
          "Ingrese para leer el tutorial de reglas\n1 - leer reglas\n2 - filtrar reglas por categoria\n3 - cuanto he leido?\n0 - salir"
        )
      )
    } else {
      alert("el numero de ID ingresado es incorrecto");
    }
  } else if (opcion === 2) {
    let categoriaSeleccionada = prompt(
      "Ingrese la categoría para filtrar las reglas:\ncreacion de personaje\ncomo se combate\nequipamento\nmecanicas de interaccion\nviajando por el mapa"
    )

    let reglasFiltradas = reglas.filter((regla) => regla.categoria === categoriaSeleccionada);

    reglasFiltradas.forEach((regla) => {
      alert(regla.nombre + ": " + regla.texto)

      let indiceleido = aprendido.findIndex(
        (aprendido) => aprendido.id === regla.id
      )
      if (indiceleido === -1) {
        aprendido.push({
          id: regla.id,
          nombre: regla.nombre,
          leido: regla.leido,
        })
      }
    })

    console.log(aprendido)

    opcion = Number(
      prompt(
        "Ingrese para leer el tutorial de reglas\n1 - leer reglas\n2 - filtrar reglas por categoria\n3 - cuanto he leido?\n0 - salir"
      )
    )
  } else if (opcion === 3) {
    let total = 0
    total = aprendido.length * 10
    alert("Felicitaciones! Usted leyó el " + total + "% de las reglas de juego!")

    opcion = Number(
      prompt(
        "Ingrese para leer el tutorial de reglas\n1 - leer reglas\n2 - filtrar reglas por categoria\n3 - cuanto he leido?\n0 - salir"
      )
    )
  }
}

function listar(listadereglas) {
  return listadereglas
    .map(
      (regla) =>
        "ID " + regla.id + " - " + regla.nombre
    )
    .join("\n")
}

console.log("final")