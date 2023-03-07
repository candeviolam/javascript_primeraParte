//#region Requisitos funcionales
//simular una lista de productos para comprar
//preguntar al usuario que productos desea comprar
//almacenar esos productos en un array
//manipular los datos del array (leer, escribir, modificar, etc)
//mantener este sistema vivo en base a decisiones
//#endregion

//#region PROMPT

let respuesta = "";
const mensaje = "Hola, mi nombre es: ";
respuesta = prompt("Escriba un nombre");

// if(respuesta === " " || respuesta === "") {   // si alguien no llena con el dato, que vuelva a aparecer el msj
//     respuesta = prompt("Escriba un nombre, es obligatorio");
// } // pero de esta manera, al 2do "aceptar" desaparece aunque no llene el dato
//   // así que hacemos un "while" para que se repita infinitamente mientras la respuesta sea un caracter o un string vacío

while(respuesta === "" || respuesta === " " || respuesta === null) {
    respuesta = prompt("Escriba un nombre, es obligatorio");
}

console.log(mensaje + respuesta);

//#endregion