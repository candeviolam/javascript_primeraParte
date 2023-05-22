// const array = [1,2,3,4];
let array = [1, 2, 3, 4];
let array_cadenas = ["hola", "mundo", "donde", "casa"];
//let array_mixto = ["hola", 1, 10, "mundo"];
const numero = 10;

array[0] = 11;

console.log(numero);
console.log(array);
console.log(array[0]);

let array_2 = [10, 12, 13, 14];
let acumulador = 0;
acumulador = array_2[0] + array_2[1] + array_2[2] + array_2[3];
console.log(acumulador);

console.log("este índice no existe");
console.log("-------------");
console.log(array[4]);

//CICLOS ITERATIVOS O BUCLES

//FOR - sintaxis -> for (let index = 0; index < array.length; index++) {
//                     const element = array[index];
//                  }

for (let index = 0; index < array_2.length; index++) {
  const element = array_2[index];
  console.log(element);
}

console.log("longitud");
console.log(array_2.length);
console.log(array_2);

const sumatoria = [15, 15, 20, 18, 31, 2];
var acumuladro = 0;

for (let index = 0; index < sumatoria.length; index++) {
  acumuladro += sumatoria[index];
}

console.log(acumuladro);
