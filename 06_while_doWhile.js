// // let potC = 2;
// // for (let index = 1; index < 7; index++) {
// //   pot = pot * 2;
// // }
// // console.log(pot);

// // WHILE -> compuesto(? por: condición, lógica y condicionante
// // while (condition) {

// // }

// const a = 1;
// const b = 2;

// while (b > a) {
//   // la lógica (algorítmos)
//   // condicionante -> me permite romper la condición y salir del bucle
// }

let contador = 0;
const vector = [1, 0, 1, 0, 1];
while (contador < vector.length) {
  console.log("Ejecutando desde el while");
  console.log(vector[contador]);
  contador++;
  break;
}
console.log("nuevo código");

// for (let index = 0; index < 10; index++) {
//   const element = array[index];
//   console.log("Ejecutando desde el for");
// }

// for (let index = 0; index < 10; index++) {
//   const element = array[index];
//   console.log("Ejecutando desde el for");
// }

for (let index = 0; index < vector.length; index++) {
  console.log("Ejecutando desde el for");
}

// const vector = [1, 0, 1, 0, 1];
// console.log(vector[0]);

// DO WHILE

const a = 10;
const b = 9;
do {
  console.log("Estoy desde el do while");
} while (contador > vector.length);

const empleados = ["a", "b", "c", "d"];

do {
  // una vez la pc debe verificar la fecha de nacimiento de los empleados
} while (empleados.length < 1);

// do whiles, while, for, if, else, else if, switch, operadores, creación de variables

// En un concurso de pesca participaron 5 pescadores, declare un array de enteros, cada elemento del array representará
// el peso del pez que atrapó cada pescador.
// Indique cuál es el pez de MAYOR peso y cuál es el pez de MENOR peso.

const peces = [100, 9, 120, 77, 5];
let contadorPeces = 0;
let mayor = 0;
let menor = 9999;

while (contadorPeces < peces.length) {
  // console.log(peces[contadorPeces]); //le pongo contadorPeces porque se inicializa en 0 y se va sumando solo (así no pongo índice por índice)
  if (peces[contadorPeces] > mayor) { //le pongo contadorPeces porque se inicializa en 0 y se va sumando solo (así no pongo índice por índice)
    mayor = peces[contadorPeces];
  } else if(menor > peces[contadorPeces]) {  // hacer con else solo
    menor = peces[contadorPeces];
  }
  contadorPeces++;
}

console.log(mayor);
console.log(menor);
