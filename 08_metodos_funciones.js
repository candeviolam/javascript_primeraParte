// const operando_a = 10;
// const operando_b = 10;
// const operando_c = 10;
// const operando_d = 10;
// const operando_e = 10;
// const operando_f = 10;
// const suma1 = operando_a + operando_b;
// const suma2 = operando_a + operando_c;
// const suma3 = operando_a + operando_d;
// const suma4 = operando_a + operando_e;
// const suma5 = operando_a + operando_f;

// console.log(suma);

//usar un función para evitar repetir tanto código como arriba!!

// const resultado = Suma(30, 100);
// console.log(resultado);
// const resultadoB = Suma(40, 200);
// console.log(resultadoB);

// let primerValor = prompt("Ingrese un valor");
// primerValor = parseInt(primerValor);

// let segundoValor = prompt("Ingrese el segundo valor");
// segundoValor = parseInt(segundoValor);

const primerValor = 10;
const segundoValor = 10;

const rta = Suma(primerValor, segundoValor);
// const resultado = Suma(10, 10);

if (rta % 2 === 0) {
  //uso la función con retorno cunado necesito usar el resultado/retorno para hacer algo extra(?
  console.log("Par");
}

// alert(resultado);

//SUMA  esta función recibe parámetros y me devuelve algo / tiene retorno
function Suma(a, b) {
  return a + b;
}

//Multiplicar: recibe parámetro y tiene retorno
function Multiply(a, b) {
  return a * b;
}

//Saludar: recibe parámetros y no retorna nada
function Saludar(nombre) {
  const mensaje = `hola ${nombre}, cómo estás?`;
  console.log(mensaje);
}

Saludar("Cande");

//ObtenerSuledoBase : no recibe nada por parámetro ydevuelve algo
function obtenerSueldoBase() {
  const sueldoBase = 60000;
  return sueldoBase;
}

const antiguedad = 5;
const montoPorAntiguedad = 3000;
//calculo que sueldo
const sueldoPuro = obtenerSueldoBase(); // puedo ponerle sueldoPura, sueldoBase, lo que quiera
const antiguedadCalculada = Multiply(antiguedad, montoPorAntiguedad);

const resultadoFinal = Suma(sueldoPuro, antiguedadCalculada);
console.log(resultadoFinal);
// console.log(sueldoPuro + antiguedadCalculada);
// console.log(sueldoPuro + antiguedad * montoPorAntiguedad);

//alertarErrorNoControlado: no reciben nada por parámetro y no devuelven nada
function alertaPagaImpuestos() {
  alert("Paga impuestos a las ganancias");
}

function alertaNoPagaImpuestos() {
  alert("No paga impuestos a las ganancias");
}

//para suman los ejemplso que venimoms realizando
if (resultadoFinal > 440000) {
  alertaPagaImpuestos();
} else {
  alertaNoPagaImpuestos();
}
