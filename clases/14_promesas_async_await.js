// promesas
// async await
// operador condicional ternario
// import y export

import { getDataFromDataBasePromise } from "./14_promises.js"; // lo que viene abajo (base de datos)
// import getDataFromDataBasePromise from "./14_promises.js"; // -> cuando no utilizo destructuring en el export (promises)

/*  COMENTADO PARA HACER EL IMPORT Y EXPORT DE LOS OTROS ARCHIVOS 14_
//#region BASE DE DATOS
const tipos = {
  //objeto
  MAGIA: "magia",
  MAQUINA: "máquina",
  OSCURO: "oscuro",
  HABIL: "hábil",
  MUTANTE: "mutante",
};

// esta lista simularía la devolución de una base de datos o un servidor
//    acostumbrarse a poner el nombre en inglés
const characters = [
  // array de objetos - cada objeto va a representar un documento de la base de datos
  {
    //  clave: valor,   -> objeto en formato de JSON
    id: 1, // identificador único - tipo number - autoincrementales (cada vez que agrego un personaje nuevo, el id se coloca solo)
    nombre_heroe: "Iron Man",
    super_poder: "Inteligencia",
    hp: 2500,
    mp: 2500,
    tipo: tipos.HABIL,
  },
  {
    id: 2,
    nombre_heroe: "Thor",
    super_poder: "Dios del trueno",
    hp: 2000,
    mp: 3000,
    tipo: tipos.MAGIA,
  },
  {
    id: 3,
    nombre_heroe: "Wolverine",
    super_poder: "Garras Inmortalidad",
    hp: 3500,
    mp: 1200,
    tipo: tipos.HABIL,
  },
  {
    id: 4,
    nombre_heroe: "Dead Pool",
    super_poder: "Inmortalidad",
    hp: 4000,
    mp: 0,
    tipo: tipos.HABIL,
  },
];
//#endregion BASE DE DATOS
*/

//---------------------------

//                 los array pueden filtrar
//                                  pongo un predicado entre (), que va a ser como una condición
//                                    "personaje" es como si fuera un for each, va a representar cada uno de los ítems del array
const personajeA = characters.filter(
  (personaje) => personaje.tipo === tipos.HABIL
);
const personajeB = characters.filter((personaje) => personaje.id === 1); // id para que sea más específico el filtrado
// console.log(personajeB);

//---------------------------

//       Obtener data de la base de datos de forma sincrónica
//          le pone el nombre en inglés porque en las empresas se hace así (es o no es el nombre específico entonces?, creo que lo inventó)
function getDataFromDataBaseSync() {
  return characters; // cuándo yo llame este método va a devolverme la lista completa
}
// console.log(getDataFromDataBaseSync());

// lo mismo ambas funciones (la de arriba y la de abajo),
// sólo que la segunda está envuelta en una func setTimeout que va a esperar 3segs antes de retornar los personajes

function getDataFromDataBaseWithDelay() {
  // FUNCIÓN ASINCRÓNICA
  //  función de js
  //             función de flecha anónima (no la estoy declarando, no le estoy poniendo un nombre)
  //                   1er parám. -> lo que quiero retornar
  //                              2do parám./argumento (separado por ,) -> un tiempo en milisengundos que yo quiero que espere antes de ejecutar la acción
  setTimeout(() => characters, 3000); // 3000 milisegundos = 3 segundos
  //                                  la func todavía no me devolvió los personajes, está esperando
  //                 getDataFrom...WithDelay -> me devuelve characters que es un array
}

// console.log(getDataFromDataBaseWithDelay()); // ésto me da undefined porque los personajes "no existen" en la base de datos, xq estoy esperando los 3segs, a difirecnia de la primera función que sí me los devuelve
// //                                              intento imprimir los personajes, pero todavía no los tengo en el servidor

// console.log("Sigo ejecutando por más que no volvió la data");
/*  para que se me impriman los personajes en consola
function getDataFromDataBaseWithDelay() { // async -> código asincrónico
  setTimeout(() => console.log(characters), 3000);
}
getDataFromDataBaseWithDelay();
console.log("Sigo ejecutando por más que no volvió la data"); // por más de que esté dsp en el código, se ejecuta antes
*/

/* 
function getDataFromDataBaseWithDelay(){
    setTimeout(() => {    ---> lo mismo que haber resumido directamente en () => characters -> la func. flecha permite eso
       return characters; 
     }
    );
}
*/

// Formas de decir a mi código que ESPERE antes de seguir ejecutándose (console.log de que se está ejecuntando el código y dsp viene lo que tiene delay)
// conceptos a ver -> PROMESAS - ASINCRONÍA -> cualquiera de los dos funciona

// Promesa -> objeto de JS, simbólicamente representa un '"te prometo que voy a responder" pero espera acá, y cuando te responda procesá esa info'
//         -> promesa: función que me devuelve un objeto
// utilizo "promesas" cuando tenga alguna petición al servidor (gralmente vienen del back, del lado de Node JS; no del front, que más que nada maneja la promesa (.then(), .catch())) -> que mi sist antes de iniciar haga algo
// Obtener datos de la base de datos con una promesa

/*  ------------> comentada la función por ejercicio de export e import

function getDataFromDataBasePromise() {
  //  setTimeout(() => characters, 3000); -> convertirlo en una promesa
  //                 promesa adentro recibe como parám de constructor otra func
  //                     tiene adentro una función anónima, que automáticam recibe por parám las funciones resolve y reject (me sirven para poder terminar la promesa, es decir, para decir que se cumplió y responderle al front o usuario que hace la petición de mis datos)
  //                           resolve y reject se pueden llamar como yo quiera (res, rej, etc), pero esos son los nombre "reales"
  return new Promise(function (resolve, reject) {
    //            ? por si characters no es null
    //                    si el array es mayor a 0, es decir si es que hay data
    if (characters?.length > 0) {
      //                       me devuelve characters antes de que resuelva la promesa (cómo obtenemos los personajes cuando llamamos a la función?)
      //    setTimeout(resolve(characters), 3000) -> en lugar de mandar directam "characters", le mando un obj respuesta
      setTimeout(
        //resolve retorna este obj de datos cuando la promesa se resuelve correctam (funciona como una especie de return)
        resolve({
          // todo este objeto es el que sale en el response de abajo
          // un obj personalizado p/ indicarle al usuario que todo terminó en forma correcta
          ok: true,
          data: characters,
          msj: "Este obj lo estoy creando yo dentro del resolve para escribirlo en el .then()",
        }), // sería lo mismo todo esto que poner resolve(characters), -> pero armo el obj para más claridad
        3000
      );
    }
    // a los obj de resolve y reject los voy creando yo con los criterios que desee
    setTimeout(
      // reject -> función que retorna el obj de datos de la promesa cuando fue rechazada
      resolve({ // ésto es reject pero editado para el ejercicio de la línea 365
        ok: false,
        // error_message: "No hay datos de los personajes", // -> editado para el ejercicio de la línea 365
        data: null, // cuando no hay datos de los personajes en la base de datos / cuando ok es false
        mensaje: "", // mensaje vacío
      }),
      3000
    );
  });
}
*/

// cómo decirle a mi código que tiene que esperar

//cuando llamo a la getDataFrom...Promise -> siempre que necesite llamarla para usarla, utilizar: .then() y .catch()
getDataFromDataBasePromise()
  //. -> me ofrece tres métodos: catch(), finally(), then()
  // cada vez que mi promesa se resuelva, voy a llamar al método .then(); es decir, cada vez que mi promesa se resuelva hacemos:
  // .then() -> espera a que esta promesa responda correctamente, y después/entonces escribimos la respuesta en la consola
  //    esta respuesta es lo que yo le paso en el resolve por parámetro, voy a recibir el objeto que tiene el resolve
  .then((response) => console.log("resolve", response))
  //acto seguido va el .catch() -> recibir la respuesta en caso de que la promesa se resuelva en un error / manejo el reject a través del catch
  //      "error" es simplemente como para colocarle un nombre al obj que tengo en el reject
  .catch((error) => console.log("reject", error));

// con función de flecha recibimos: 1. en response recibimos el obj que pasamos a través del resolve
//                                  2. en error recibimos el obj que pasamos a través de reject

// getDataFromDataBasePromise()
//   .then((response) => {
//     console.log(response);

//     response.data.forEach((element) => {
//       console.log(element);
//     });
//   })
//   .catch((error) => console.log("reject", error));

// valor por referencia vs valor por valor

// ---------------------------

// //                       callback -> función que se ejecuta dentro de otra función como respuesta a esa lógica
// const saludo = (fun) => fun("hola mundo");
// saludo((mensaje) => console.log(mensaje)); // ejecuta la función que recibo por parámetro

// ----------------------------

// trabajar con las promesas trabajando con algo que se llama ASINCRONÍA
// crear funciones asíncronas o async await -> funcs asíncronas retornan promesas de forma implícita
// await (palabra reservada) -> nos ahorramos usar el .then() y el .catch()

//             Obtener data asíncrona
// async -> indicándole a la func que sea asíncrona, va a tener que esperar la respuesta del servidor
// async function getDataAsync(){ // esta func async sigue actuando como si fuera una promesa por fuera, pero yo sólo quiero utilizar la data
//   console.log("Ejecutando respuesta desde una función asíncrona");
//   //    response recibe tanto el valor de reject como de resolve
//   //               usamos await para esperar la respuesta -> esperar hasta que esta promesa/func se resuelva
//   //                     llamamos a la función de la promesa que estamos usando
//   const response = await getDataFromDataBasePromise(); // await -> retornarme el resolve
//   console.log(response);
// }

// getDataAsync();
/*
async function getDataAsync() {
  console.log("Ejecutando respuesta desde una función asíncrona");
  const response = await getDataFromDataBasePromise();
  response.data.forEach((element) => {
    const h1 = document.createElement("h1");
    h1.innerText = element.nombre_heroe;
    app.appendChild(h1);
  });
}

getDataAsync();
 */
/*
// try catch -> se usa para manejo de errores (prácticamente como el .then y .catch) pero se usa siempre que se quiera manejar el código de manera segura
async function getDataAsync() {
  try {
    const response = await getDataFromDataBasePromise();
    response.data.forEach((element) => {
      const h1 = document.createElement("h1");
      h1.innerText = element.nombre_heroe;
      app.appendChild(h1);
    });
  } catch (error) {
    // disparar un error en el momento que se ejecute o que salga ese error
    throw new Error(error.error_msg); // sale como un error rojo en consola 
    console.log(error.error_msg);
    // usar cualqiuera de las dos opciones de arriba, pero así personalizo el msj
    console.log("Verifique que la base de datos tenga datos"); 
  }
}

getDataAsync();
*/

///// FETCH CON AWAIT O FETCH CON PROMESA, LAS DOS FORMAS DE USAR ASINCRONÍA -> ambas tienen el mismo resultado

//obtener data del fetch
/*
async function getDataFromFetch() {
  try {
    //                     con el fetch voy a trabajar directamente con la respuesta (dif con then) -> la trabajo desde adentro
    const response = await fetch(
      // await para esperar la respuesta
      "https://rickandmortyapi.com/api/character/?page=4"
    );
    const result = await response.json();
    // trabajo con la respuesta recibida (parte de lo que dice arriba)
    result.results.forEach((personaje) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const button = document.createElement("button");
      const hr = document.createElement("hr");
      const br = document.createElement("br");

      h3.innerText = personaje.name;
      img.src = personaje.image;
      button.innerText = "Detalle";
      button.classList.add("btn");
      button.classList.add("btn-primary");

      //acá creamos el div incrustando los hijos
      div.appendChild(h3);
      div.appendChild(img);
      div.appendChild(button);
      div.appendChild(br);
      div.appendChild(hr);

      //agregar todo el div junto con los hijos asignados al div app del index
      app.appendChild(div);
    })
  } catch (error) {
    console.log(error);
  }
}

getDataFromFetch(); 
*/

//             esta función me devuelve una promesa
async function getDataFromFetch() {
  // trabajar esta función como si fuera un promesa (lo que viene abajo)
  try {
    const response = await fetch(
      // await para esperar la respuesta
      "https://rickandmortyapi.com/api/character/?page=4"
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

// con la pomesa dentro del .then() puedo personalizar un poco más la respuesta porque trabajo desde adentro (dif con fetch)
//                .then() -> fetch con promesa
//                       trabajo con la respuesta antes de recibirla (parte de lo que dice arriba) -> la trabajo desde afuera
getDataFromFetch().then((res) => {
  res.results.forEach((personaje) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const button = document.createElement("button");
    const hr = document.createElement("hr");
    const br = document.createElement("br");

    h3.innerText = personaje.name;
    img.src = personaje.image;
    button.innerText = "Detalle";
    button.classList.add("btn");
    button.classList.add("btn-primary");

    //acá creamos el div incrustando los hijos
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(button);
    div.appendChild(br);
    div.appendChild(hr);

    //agregar todo el div junto con los hijos asignados al div app del index
    app.appendChild(div);
  });
});

///// FETCH CON AWAIT O FETCH CON PROMESA, LAS DOS FORMAS DE USAR ASINCRONÍA -> ambas tienen el mismo resultado

// ----------------------------------------------

// Operador condicional ternario || import - export
//temas necesarior para trabajar con react

const a = 10;

// op condic tern: evalúa una condición, y luego del ? establece el valor de esa condición si es true o si es false
//                % = módulo
//                          ? -> op condic ternario - especie de if
//                                     : -> de lo contrario - especie de else
//                             true        false
const mensaje = a % 2 === 0 ? "Es par" : "Es impar"; // "if-else más limpio/resumido"
// console.log(mensaje);

async function getPromise() {
  const response = await getDataFromDataBasePromise();
  // console.log(response);
  // editada la línea 152 y 154 para éste ejemplo
  //                               si la respuesta es true -> le pasamos la data, y sino, sale el msj
  //                   si response no es null (?), entra a data, si data no es null (?), entra a length
  //                                   si borro los datos de los characters veo el msj
  const array = response?.data?.length > 0 ? response.data : "No hay resultados"; 
  console.log(array); // me sale null porque el array de characters está vacío
}

// llamar a getPromise para que se imprima en la consola
getPromise(); // me devuelve ok:true .... / si borro los datos de los personajes, me devuelve ok:false...

// se puede incluso agregar estilos con operadores condicionales
//const label = horario.Estado === Estado.Reservado ? "background-color: 'red'" : "background-color: 'yellow'";
