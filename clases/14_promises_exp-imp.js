// EXPORT E IMPORT

//      uso destructuring si la exportación es tmb a través de un obj (14_db) -> especifico p/ obtener los objs o funcs que necesito
import { characters } from "../14_db_promises/db.js"; 

function getDataFromDataBasePromise() {
  return new Promise(function (resolve, reject) {
    if (characters?.length > 0) {
      setTimeout(
        resolve({
          ok: true,
          data: characters,
          msj: "Este obj lo estoy creando yo dentro del resolve para escribirlo en el .then()",
        }),
        3000
      );
    }
    setTimeout(
      // reject -> función que retorna el obj de datos de la promesa cuando fue rechazada
      resolve({
        // ésto es reject pero editado para el ejercicio de la línea 356
        ok: false,
        // error_message: "No hay datos de los personajes", // -> editado para el ejercicio de la línea 356
        data: null, // cuando no hay datos de los personajes en la base de datos / cuando ok es false
        mensaje: "", // mensaje vacío
      }),
      3000
    );
  });
}

export { getDataFromDataBasePromise };

// export default getDataFromDataBasePromise; // -> si la exporto por defecto, cuando la importe no utilizo destructuring,
//                                                  sino simplemente la llamo (14_promesas..)
