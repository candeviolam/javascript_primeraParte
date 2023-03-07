//#region PROMPT

// let respuesta = "";
// const mensaje = 1;

// // if(respuesta === " " || respuesta === "") {   // si alguien no llena con el dato, que vuelva a aparecer el msj
// //     respuesta = prompt("Escriba un nombre, es obligatorio");
// // } // pero de esta manera, al 2do "aceptar" desaparece aunque no llene el dato
// //   // así que hacemos un "while" para que se repita infinitamente mientras la respuesta sea un caracter o un string vacío

// while(respuesta === "" || respuesta === " " || respuesta === null) {
//     respuesta = prompt("Ingresa tu fecha de nacimiento");
// }

// console.log(typeof(respuesta));

// let convertir = Number(respuesta);
// console.log(convertir);
// console.log(typeof(convertir));

// // while(convertir === NaN) {
// //     const respuestaNueva = prompt("Ingrese un número válido");
// //     convertir = Number(respuestaNueva);
// // }

//#endregion

//#region Requisitos funcionales
//simular una lista de productos para comprar [Array]
//preguntar al usuario que productos desea comprar
//almacenar esos productos en un array
//manipular los datos del array (leer, escribir, modificar, etc)
//mantener este sistema vivo en base a decisiones
//#endregion

let productos = []; // acá vamos a almacenar los productos de la lista
let opcion = ""; // variable inicializada en un string vacío, esta variable "opcion" va a tomar el valor e las opciones que le estamos pasando en la consola (prompt)
const mensaje_inicial = (opcion = prompt(
  // para que una vez almacena el producto de arriba, me vuelva a preguntar
  "Por favor, ingrese una de las siguientes opciones: \n" +
    "1. Agregar producto \n" +
    "2. Eliminar producto \n" +
    "3. Ver lista de productos \n" +
    "4. Filtrar lista \n" +
    "5. Salir"
)); // vamos a abarcar desde la opción 1 a la 5

// 1ero: convertir "opcion" a number con Number o parseInt
opcion = parseInt(opcion);
//            distinto de
while (opcion !== 5) {
  // si la opción es 4 (salir) el bucle se tiene que romper
  // para analizar qué opción eligió el usuario --> para evaluar una variable y asignarle distintos casos: SWITCH
  switch (
    opcion // hasta ahora esto me carga un solo dato, necesito crear un bucle, enconces lo meto en un WHILE
  ) {
    case 1:
      let producto = prompt("Por favor ingrese el producto a la lista"); // no puedo verificar (sin inteligencia artificial) que la palabra que ingresó el usuario sea un producto válido, porque no puedo corroborar strings! Pero por ahora que quede ahí
      productos.push(producto); // alert("Agregar prod"); = .push
      opcion = prompt(mensaje_inicial);
      opcion = parseInt(opcion); // vuelvo a declararlo porque sino desde acá adentro me toma como string las opciones y no como los número que son (por ej, el 4 no anda y no puedo salir)
      break;
    case 2:
      let mensaje = ""; // delcaro una variable vacía a la que abajo le pongo valor
      if (productos.length > 0) {
        // = si "productos" tiene elementos ... (tmb podria poner productos.length !== 0 -> que tmb incluye que sea "mayor")
        productos.pop(); // alert("Eliminar un producto"); = .pop
        mensaje = "Producto eliminado."; // -> si producto tiene length (es decir al menos un elem) y puedo eliminar el porducto, que aparezca este msj
      } else {
        mensaje = "No hay ningún producto para eliminar. "; // -> en caso de que no haya ningún producto agregado
      }
      opcion = prompt(
        mensaje + // estoy concatenando el msj dependiendo de que escenario se cumpla (si es que había un producto y se eliminó, o si no había producto para eliminar)
          mensaje_inicial
      );
      opcion = parseInt(opcion);
      break;
    case 3: // opciones por si no hay ningú producto agregado para ver en el la lista
      if (productos.length !== 0) {
        let lista = "";
        for (let index = 0; index < productos.length; index++) {
          // alert("Ver lista"); -> hago un FOR para ver la lista de productos
          const producto = productos[index]; // const en lugar de let porque en este caso yo no quiero mutar el valor de "producto"
          lista += `- ${producto} \n`;
        }
        alert(lista);
      } else {
        alert("No hay ningún producto en la lista.");
      }
      opcion = prompt(mensaje_inicial);
      opcion = parseInt(opcion);
      break;
    case 4:
      let filtro = prompt("Por favor, ingrese la inicial del producto"); //alert("Filtrar lista");
      opcion = prompt(mensaje_inicial);
      opcion = parseInt(opcion);
      break;
    case 5:
      opcion = 5; //  para salir
      break;
    default: // el case default se ejecuta si ninguno de los casos contemplado se cumple
      alert("Ingrese una de las opciones anteriores");
      break;
  }
}

console.log(productos);
