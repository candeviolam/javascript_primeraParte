// clase 21/3/2023
//Trabajo Pr+actico en clases N°1

/*pto 3

Crear una función que se llame "presentación" que reciba como parámetros el nombre, apellido y rol del empleado,
dentro de la func se deberá imprimir el mensaje "Mi nombre es: {nombre} {apellido}. Soy {Rol} de la empresa."*/

const empleados = [
  {
    nombre: "Gerónimo", //JSON
    apellido: "López",
    rol: "mentor",
  },
  {
    nombre: "Matías",
    apellido: "Altamiranda",
    rol: "tutor",
  },
  {
    nombre: "Candelaria",
    apellido: "Viola Mirande",
    rol: "estudiante",
  },
];

//segmentar -> separar la lógica
//separar las responsabilidades

// la función se encarga de imprimir el msj
function Presentacion(nombre, apellido, rol) {
  console.log(`Mi nombre es: ${nombre} ${apellido}. Soy ${rol} de la empresa.`);
}

// el for se encarga de recorrer la lista y repetir el código n veces, dependiendo de la cantidad de elementos del array
for (let i = 0; i < empleados.length; i++) {
  const empleado = empleados[i]; // el  index me va a devolver cada uno de los empleados -- en esta variable (empleado / element / etc, lo que quiera) es dónde se va a almacenar cada uno de los datos (?
  Presentacion(empleado.nombre, empleado.apellido, empleado.rol); // esta función se va a ejecutar siempre que el ciclo for cumpla esta condición
}
