// const a = 10;
// const b = 3;
// const c = 4;
// const d = 15;
// const e = 17;
// const f = 1;

// console.log(a + b);
// console.log(a + c);
// console.log(a + d);
// console.log(a + e);
// console.log(a + f);

// console.log(b + a);
// console.log(b + c);
// console.log(b + d);
// console.log(b + e);
// console.log(b + f);

// function SumaB(operandoA, operandoB) {
//   return operandoA + operandoB;
// }

// SumaB(30, 10);

function Suma(operando1, operando2) {
  console.log(operando1 + " dentro de función");
  return operando1 + operando2; //me devuelve la suma de esto
}

const resultado = Suma(5, 5);
console.log(resultado);

// const operacion = prompt("Indique la operación que desea realizar");
// operacion = 10;
// console.log(operacion);

// function Prompt(mensaje, valor) {
//   return valor;
// }

function elMayorDeUnArray(elarrayquepasoporparametro) {
  console.log(
    "El array que vamos a utilizar es: " + elarrayquepasoporparametro
  );
  let mayor = 0;
  for (let index = 0; index < elarrayquepasoporparametro.length; index++) {
    const element = elarrayquepasoporparametro[index];
    if (element > mayor) {
      mayor = element;
    }
  }

  // me va a imprimir en la consola el elemento más grande del array
  console.log("El elemento del array más grande es: " + mayor);
}
// de esta manera con una sola función pongo los distintos datos y valores que quiero calcular y me ahorro código
const arrayA = [1, 2, 3];
const arrayB = [17, 20, 23];
const arrayC = [22, 25, 42];

elMayorDeUnArray(arrayA);
elMayorDeUnArray(arrayB);
elMayorDeUnArray(arrayC);
elMayorDeUnArray([2, 105]);
//el valor de elarrayquepasoporparametro solo lo obtiene cuando yo se lo envío por parámetro a la función (ej elMayorDeUnArray(arrayA);)

function ParOImpar(numero) {
  if (numero % 2 === 0) {
    // console.log(numero + " " + "Es par");
    return true;
  } else {
    // console.log(numero + " " + "Es impar");
    return false;
  }
}

const numeroZ = 11;
// ParOImpar(10);
// ParOImpar(3);
// ParOImpar(numeroZ);

//                   estoy almacenando ParOImpar en variables
const resultadoUno = ParOImpar(10);
const resultadoDos = ParOImpar(3);
// const resultadoTres = ParOImpar(numeroZ);

console.log(resultadoUno);
console.log(resultadoDos);
// console.log(resultadoTres);
console.log(ParOImpar(numeroZ));
