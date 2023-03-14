// Tarea práctico  clase 07/03/23

// c) Imprmia en consola la cantidad de veces que se repite cada vocal en todos los nombres de los participantes

const concursantes = ["Ana", "Oswaldo", "Raúl", "Celia", "María", "Antonio"];

console.log(concursantes);

let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

//                                                                                      iterable = que se pueda recorrer en un ciclo
// para recorrer con un for anindado, es necesario que el elemento dentro del array sea iterable
for (let index = 0; index < concursantes.length; index++) {
  // el for va a recorrer el código n veces la longitud de concursantes
  const concursante = concursantes[index];

  for (let jdex = 0; jdex < concursante.length; jdex++) {
    // recorro la palabra (el nombre del concursante) en su longitud con otro for y me devuelve la letra
    const letra = concursante[jdex];

    switch (
      letra.toLowerCase() // convierto la letra a minúscula porque es 'case sensitive' (para los nombres que arrancan con vocal mayúscula)
    ) {
      case "a":
        a++; // acumulador/contador
        break;
      case "e":
        e++;
        break;
      case "i":
        i++;
        break;
      case "o":
        o++;
        break;
      case "u":
        u++;
        break;
      default:
        break;
    }
  }
}

console.log(a);
console.log(e);
console.log(i);
console.log(o);
console.log(u);

// d) Imprima en consola los nombres que comiencen con la letra "A"

const lowerIndex = 0;

for (let index = 0; index < concursantes.length; index++) {
  const concursante = concursantes[index];

  if (concursante[lowerIndex] === "A" || concursante[lowerIndex] === "a") {
    console.log(concursante);
  }
}

// segunda opción para el ejercicio d)

const resultados = concursantes.filter((concursante) => concursante[0] === "A");
console.log(resultados);
