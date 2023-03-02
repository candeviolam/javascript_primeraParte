const US = "dolar";
const tipoCambio = 380;
const AR = "peso";
const pisoGanancias = 440000;

const sueldoEmpleadoA = 200000;
const cobraEnA = AR;

const sueldoEmpleadoB = 150000;
const cobraEnB = AR;

const sueldoEmpleadoC = 85000;
const cobraEnC = AR;

const sueldoEmpleadoD = 3000;
const cobraEnD = US;

if (cobraEnA === US) {
  console.log("convierto");
  let conversion = sueldoEmpleadoA * tipoCambio;
  if (conversion >= pisoGanancias) {
    console.log("impuesto a las ganancias");
  }
} else {
  if (sueldoEmpleadoA >= pisoGanancias) {
    console.log("impuesto a las ganancias");
  }
}
//concatenando operaciones
if (cobraEnD === US && sueldoEmpleadoD * tipoCambio >= pisoGanancias) {
  console.log("impuesto a las ganancias");
} else if (cobraEnD === AR && sueldoEmpleadoD >= pisoGanancias) {
  console.log("impuesto ganancias sin convertir");
} else {
  console.log("el empleado no paga ganancias");
}

switch (cobraEnD) {
  case "dolar": //o -> case US: 
    //puedo ejecutar una lógica
    if (sueldoEmpleadoD * tipoCambio >= pisoGanancias) {
      console.log("paga ganancias");
    }
    break;
  case "peso":
    if (sueldoEmpleadoD >= pisoGanancias) {
      console.log("paga ganacias2");
    }
    break;
  default:
    console.log(
      "no cobra en ninguna de las monedas reconocidad, contactar al admin"
    );
    break; //return
} 

// if (sueldoEmpleadoA >= pisoGanancias) {
//   console.log("impuesto a las ganancias");
// }
// if (sueldoEmpleadoB >= pisoGanancias) {
//   console.log("impuesto a las ganancias");
// }
// if (sueldoEmpleadoC >= pisoGanancias) {
//   console.log("impuesto a las ganancias");
// }
// if (sueldoEmpleadoD >= pisoGanancias) {
//   console.log("impuesto a las ganancias");
// }
