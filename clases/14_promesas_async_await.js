// promesas
// async await
// operador condicional ternario
// import y export

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
// Obtener datos de la base de datos con un promesa
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
      reject({
        ok: false,
        error_message: "No hay datos de los personajes",
      }),
      3000
    );
  });
}

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

// crear funciones asíncronas o async await
