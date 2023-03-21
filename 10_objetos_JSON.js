//perimer objeto de programación
//JSON -> Javascript Object Notation
//usando el mappeo del mundo real, podemos crear objetos virtuales y utilizarlos en nstro sistema
let persona = {
  nombre: "Candelaria",
  apellido: "Viola",
};

// persona. // yo puedo acceder a las cosas que tengo dentro de mi objeto con el .

console.log(persona);
// utilizando el nombre de la variable del objeto y el . -> puedo acceder al valor de la propiedad que se encuentra adentro
console.log(persona.nombre);
//puedo leer y escribir en las propiedades de mi objeto / cambiar los valores de mi objeto
persona.nombre = "Sin nombre";
console.log(persona.nombre);

let persona_b = {
  nombre: "Hola",
  apellido: "Mundo",
};

const personas = [
  {
    nombre: "Cande",
    apellido: "VM",
  },
  {
    nombre: "Cris",
    apellido: "Mirande",
  },
];

console.log(personas);

//ejemplo de lista de empleados
const div = document.getElementById("app");

const empleados = [
  {
    nombre: "Gerónimo",
    apellido: "López",
    puesto: "Mentor",
    comision: "33i",
    mail: "gero@gmail.com",
    legajo: "1",
    telefono: "0800",
    es_soltero: false,
    nombreCompleto: function () {  // ---> los obj pueden llevar adentro funciones
      console.log(this.nombre + this.apellido);
    },
  },
  {
    nombre: "Matías",
    apellido: "Altamiranda",
    puesto: "Tutor",
    comision: "33i",
    mail: "mati@hotmail.com",
    legajo: "2",
    telefono: "0810",
  },
];

console.log(empleados[0]);
console.log(empleados[1]);

let htmlString = `<thead>
<tr>
  <th scope="col">Nombre</th>
  <th scope="col">Apellido</th>
  <th scope="col">Puesto</th>
  <th scope="col">Comisión</th>
  <th scope="col">Acciones</th>
</tr>
</thead>`;

empleados.forEach((empleado) => {
  htmlString += crearTabla(
    empleado.nombre,
    empleado.apellido,
    empleado.puesto,
    empleado.comision
  );
});

htmlString += `
</tbody>
</table>`;

div.innerHTML = htmlString;

function crearTabla(nombre, apellido, puesto, comision) {
  return `
  <tr>
    <th scope="row">${nombre}</th>
    <td>${apellido}</td>
    <td>${puesto}</td>
    <td>${comision}</td>
  </tr> `;
}

//crear un objeto de programación en base al análisis de un objeto de la vida real dentro de un array
//crear un array de 3 objetos JSON de un obj de la vida real, tiene que tener por lo menos 5 llaves (propiedades)
//elegir uno de eso e imprimir en consola cada una de sus propiedades (usar el índice o un FOR)
