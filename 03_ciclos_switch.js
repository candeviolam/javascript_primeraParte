//switch
//simulamos crear una paleta para que el usuario pueda personalizar su perfil de nstra app
const color = "verde";
const numero = 10;
const clima = "lluvioso";
const esTechada = false;

if (color === "azul") {
  console.log("azul");
  //acá hacemos la lógica para cambiar el fondo de la app
} else if (color === "violeta") {
  console.log("violeta");
  //acá hacemos la lógica para cambiar el fondo de la app
} else if (color === "naranja") {
  console.log("naranja");
  //acá hacemos la lógica para cambiar el fondo de la app
} else if (color === "rojo") {
  console.log("rojo");
  //acá hacemos la lógica para cambiar el fondo de la app
} else {
  console.log("no es ninguno de los colores");
  //acá dejamos el color como está (si el usuario no elige ningún color, queda el que está por defecto)
}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

//     'color' = variable
switch (color) {
  case "azul":
    console.log("azul");
    break; //break = corta cada caso, termina la ejecución de cada caso
  case "violeta":
    console.log("violeta");
    break;
  case "naranja":
    console.log("naranja");
    break;
  case "rojo":
    console.log("rojo");
    break;
  default:
    console.log("no era ninguno de los colores anteriores");
    break;
}

//el switch no evalúa la ocndición lógica, evalúa directamente el valor
switch (numero) {
  case numero % 2 === 0:
    console.log("par");
    break;

  default:
    console.log("impar");
    break;
}

//lo de arriba es distinto de:
switch (numero % 2) {
  case 0:
    console.log("par");
    break;
  default:
    console.log("impar");
    break;
}

switch (clima) {
  case "lluvioso":
    if (esTechada === false) {
      console.log("no se puede alquilar, está lloviendo");
    }
    break;
  case "soleado":
    console.log("podemos alquilar igual");
    break;

  default:
    console.log(
      "no se puede alquiera, contacte con el administrador del sistema"
    );
    break;
}

//if() default else

const inputColor = document.getElementById("color");
const body = document.getElementById("body");
let colorElegido = ""; //o var

inputColor.addEventListener("change", (e) => {
  const color = e.target.value;
  //if(color === "0a81f0"){
  //}else    //si yo evalúo dos posibilidades, puedo ir con un 'if'
  //}
  switch (color) {   //si evalúo más de dos posibilidades, puedo ir con un 'switch'
    case "#0a81f0":
      console.log("color certero");
      body.style = "background-color:" + "black";
      break;
    default: //esenciales los ":" post "background-color"
      body.style = "background-color:" + e.target.value;
      break;
  }
  console.log(e.target.value);
});
