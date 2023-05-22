//ejercicio de hacer una especie de calculadora solicitándole por la prompt al usuario las diferentes operaciones que
//podía realizar y que coloque los números con los cuales quería operar

//pedir al usuario 3 datos -> el operador (+, -, *, /), 2 valores que queremos que se operen

const mensaje =
  "Por favor, selecciones la operación que desea realizar: " +
  "+ (suma), - (resta), * (multiplicación), / (división)";

const mensaje_error =
  "Por favor, ingrese una de las operaciones válidas requerida por el sistema.";

const mensaje_suma = "El resultado de la suma es: ";

const operacion = prompt(mensaje); //en este punto deberíamos tener el operador (es decir el usuairo debería ingresar el operador por consola)
let array_operacion = []; // esto es ámbito global
if (
  operacion === "+" ||
  operacion === "-" ||
  operacion === "*" ||
  operacion === "/"
) {
  array_operacion = ValoresIngresadosPorUsuario();
  switch (operacion) {
    case "+":
      Mensaje(array_operacion[0] + array_operacion[1], mensaje_suma); // usar funciones para la suma, resta, multiplicacion y division
      break;
    case "-":
      alert(array_operacion[0] - array_operacion[1]); // tarea: convertir todos los alert(array_...) en funciones / usar funciones para la suma, resta, multiplicacion y division
      break;
    case "*":
      alert(array_operacion[0] * array_operacion[1]); // tarea: convertir todos los alert(array_...) en funciones / usar funciones para la suma, resta, multiplicacion y division
      break;
    case "/":
      alert(array_operacion[0] / array_operacion[1]); // tarea: convertir todos los alert(array_...) en funciones / usar funciones para la suma, resta, multiplicacion y division
      break;
    default:
      alert(mensaje_error);
      break;
  }
}

console.log(array_operacion);

function ValoresIngresadosPorUsuario() {
  let array = []; //existe sólo dentro de esta función -> Scope o ámbito
  let primer_valor = prompt("Por favor seleccione el primer valor.");
  let segundo_valor = prompt("Por favor seleccione el segundo valor.");
  primer_valor = parseInt(primer_valor); // almaceno los valores en sus variables convirtiéndolos a números para poder operar
  segundo_valor = Number(segundo_valor); // almaceno los valores en sus variables convirtiéndolos a números para poder operar
  array.push(primer_valor); // almacenar el primer valor
  array.push(segundo_valor); // almacenar el segundo valor
  return array; // retornar el valor del array
}

//una función que va a recibir el resultaod y el mensaje
function Mensaje(resultado, mensaje) {
  alert(mensaje + resultado); //esto no devuelve un valor, sino que imprime y le muestra un msjito al usuario
}
