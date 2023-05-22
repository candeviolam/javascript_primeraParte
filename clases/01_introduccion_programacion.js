//1. Crear una variable de tipo constante cuyo valor sea el siguiente mensaje “Fin del Ejercicio”)
const ejercicio1 = "Fin del Ejercicio";
console.log("1. " + ejercicio1);

//2. Declarar 5 variables de tipo string y concatenarlas en diferente orden
//(no importa que la oración formada no tenga sentido)
let variable1 = "El verano ";
let variable2 = "en Tucumán ";
let variable3 = "es de terror ";
let variable4 = "porque hace ";
let variable5 = "mucho calor ";
let resultado = variable3 + variable2 + variable5 + variable1 + variable4;
console.log("2. " + resultado);

//3. Una persona está intentando comprar sus productos en el super,
//la lista consta de frutas, verduras, carne, comida para su mascota,
//papel higienico y un paquete de yerba.
//Declare 5 variables que sean números decimales y realice la sumatoria de todos los productos,
//devolviendo el resultado final al cliente.
//a) Aplicar un descuento del 10% a los productos para mascotas e
//imprimir el nuevo monto a abonar al cliente.
//b) Aplicar un recargo de el 18% total del valor de la compra total por pago con
//tarjeta de crédito, imprimir en consola el monto total a pagar y el precio por cuota
//(ya que el cliente desea abonar en 3 cuotas)
//c) Un amigo del cliente llegó al super y decidió abonar la mitad del monto total en efectivo.
//Al recibir la mitad en efectivo, sólo se deberá aplicar el recargo del 18%
//al total de la mitad del producto.
//Imprimir por consola el monto nuevo a abonar y el precio por cuota.
let frutasYVerduras = 405.5;
let carne = 546.8;
let comidaMascota = 373.3;
let papelHigienico = 210.7;
let yerba = 98.4;
let resultadoSumaProductos =
  frutasYVerduras + carne + comidaMascota + papelHigienico + yerba;
console.log("3. La suma de los producto es " + resultadoSumaProductos);
//a
let descuentoComidaMascota = (comidaMascota / 100) * 10;
console.log(
  "a. Descuento sobre la comida para mascota " + descuentoComidaMascota
);
let precioDescontadoComidaMascota = comidaMascota - descuentoComidaMascota;
console.log(
  "Precio con descuento de la comida para mascota " +
    precioDescontadoComidaMascota
);
let totalActualizadoAPagar = resultadoSumaProductos - descuentoComidaMascota;
console.log(
  "Total a pagar con descuento comida de mascota contemplado " +
    totalActualizadoAPagar
);
//b
let totalConRecargo = totalActualizadoAPagar * 1.18;
console.log(
  "b. Total con el recargo del 18% por tarjeta de crédito " + totalConRecargo
);
let precioPorCuota = totalConRecargo / 3;
console.log("Precio por cuota " + precioPorCuota);
//c
let mitadEnEfectivo = totalActualizadoAPagar / 2;
console.log("c. Mitad a pagar en efectivo " + mitadEnEfectivo);
let recargoALaMitad = mitadEnEfectivo * 1.18;
console.log(
  "Recargo a la mitad a pagar con tarj de crédito " + recargoALaMitad
);
let precioPorCuotaALaMitad = recargoALaMitad / 3;
console.log("Precio por cuota de la mitad del total " + precioPorCuotaALaMitad);

//4. Declarar 6 variables de tipo number y aplicar operadores lógicos y de igualdad:
//a. Crear una variable dónde preguntemos si una de las variables creadas anteriormente es
//mayor que otra.
//b. Crear una variable dónde preguntemos si una de las variables creadas anteriormente es
//menor que otra.
//c. Crear 3 variables dónde utilicemos el operador AND usando las variables creadas anteriormente.
//d. Crear 3 variables dónde utilicemos sl operador OR usando las variables creadas anteriormente.
//e. Crear una dónde variable dónde utilizaremos el operador AND,
//elegiremos una de las 6 variables creadas anteriormente, y
//utilizaremos el operador: si la variable es PAR Y es mayor a 50
//f. Crear una dónde variable dónde utilizaremos el operador OR,
//elegiremos una de las 6 variables creadas anteriormente, y
//utilizaremos el operador: si la variable es IMPAR O es mayor igual a 8
const numero1 = 66;
const numero2 = 75.5;
const numero3 = 43;
const numero4 = 89.8;
const numero5 = 12;
const numero6 = 37.2;

const mayorQue = numero4 > numero2;
console.log("a. Es 89.8 mayor que 12? " + mayorQue);

const menorQue = numero1 < numero6;
console.log("b. Es 66 menor que 37.2? " + menorQue);

console.log("c. Tres variables usando el operador AND: ");
const operadorAND = numero3 == numero2 && numero5 <= numero4;
console.log(operadorAND);
const operadorAND2 = numero6 > numero5 && numero1 < numero2;
console.log(operadorAND2);
const operadorAND3 = numero1 >= numero3 && numero2 == numero4;
console.log(operadorAND3);

console.log("d. Tres variables usando el operador OR: ");
const operadorOR = numero1 == numero3 || numero5 <= numero4;
console.log(operadorOR);
const operadorOR2 = numero4 > numero5 || numero6 == numero1;
console.log(operadorOR2);
const operadorOR3 = numero2 <= numero1 || numero6 > numero3;
console.log(operadorOR3);

// console.log("e. Es 66 un número par y mayor a 50? ");
// const numero1PAR = numero1 % 2 == 0;
// console.log(numero1PAR);
// const numero1MayorQue50 = numero1 > 50;
// console.log(numero1MayorQue50);
// const numero1PARYMayorQue50 = numero1PAR && numero1MayorQue50;
// console.log(numero1PARYMayorQue50);

console.log("e. Es 66 un número par y mayor a 50? ");
const numero1PAR = numero1 % 2;
console.log("resto: " + numero1PAR + " = par");
const numero1PARYMayorQue50 = numero1 % 2 == 0 && numero1 > 50;
console.log(numero1PARYMayorQue50);

// console.log("f. Es 43 impar o mayor/igual a 8? ");
// const numero3IMPAR = numero3 % 2;
// console.log(numero3IMPAR);
// const numero3MayorQue8 = numero3 >= 8;
// console.log (numero3MayorQue8);
// const numero3ImparOMayorQue8 = numero3IMPAR || numero3MayorQue8;
// console.log(numero3ImparOMayorQue8);

console.log("f. Es 43 impar o mayor/igual a 8? ");
const numero3IMPAR = numero3 % 2;
console.log("resto: " + numero3IMPAR + " = impar");
const numero3ImparOMayorQue8 = numero3 % 2 == 0 || numero3 >= 8;
console.log(numero3ImparOMayorQue8);
