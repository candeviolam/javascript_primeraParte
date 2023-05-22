//Objeto JSON
// {
//     nombre: "Gerónimo",
//     apellido: "López",
//     puesto: "Mentor",
//     comision: "33i",
//     mail: "gero@gmail.com",
//     legajo: "1",
//     telefono: "0800",
//     es_soltero: false,
//     nombreCompleto: function () {
//     console.log(this.nombre + this.apellido);   ---> los obj pueden llevar adentro funciones
//    },
//   }

// CLASES

class Empleado {
  nombre = "";
  apellido = "";
  email = "";
  sueldo = 0;
  //   nombreCompleto = function () {
  //     console.log(this.nombre + " " + this.apellido);
  //   };
  nombreCompleto = function () {
    console.log(`${this.nombre} ${this.apellido}`);
  };

  parOImpar = function () {
    if (this.sueldo === 0) {
      return "Debe ingresar un sueldo para poder calcular si es par o impar";
    }

    if (this.sueldo % 2 === 0) {
      return "Par";
    } else {
      return "Impar";
    }
  };

  constructor(nombre, apellido, email, sueldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.sueldo = sueldo;
  }
}

// NEW -> nos permite Instancia un Objeto
let primer_empleado = new Empleado(
  "Cande",
  "VM",
  "canduchivm@homtail.com",
  1000
);
console.log("Éste es un objeto creado a partir de una clase");
console.log(primer_empleado);
primer_empleado.nombreCompleto(); // -> abor y cierro paréntesis para hacerla andar porque es una función
console.log(primer_empleado.parOImpar());
const a = [1, 2, 3, 4, 5]; // --> array -> muchos datos -> utilizar su índice para poder acceder a ellos
const b = 1; // ---> dato simple
const c = {
  // objeto --> dato complejo compuesto de datos pequeños
  nombre: "hola",
  legajo: 1234,
  mail: "@mail.com",
};
const d = new Empleado("gero", "hola", "a@gmail.com", 1200); // objeto de tipo clase ->  tmb objeto complejo compuesto de datos pequeños

c.legajo; // --->para acceder  al dato
// a.length = 10;
// console.log(a);
console.log(a.length);
