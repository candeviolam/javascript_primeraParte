// const h1 = "<h1>Hola Mundo</h1>";
// div.innerHTML = h1;

// const h1B = document.createElement("h1");
// h1B.innerText = "Chau Mundo";
// div.appendChild(h1B);

//referencia
const div = document.getElementById("app");
const label = document.getElementById("lbl");
const btnMas = document.getElementById("mas");
const btnMenos = document.getElementById("menos");
let contador = 0;

btnMas.classList.add("btn");
btnMas.classList.add("btn-primary");
btnMenos.classList.add("btn");
btnMenos.classList.add("btn-danger");

btnMas.addEventListener("click", function () {
  contador++;
  Refresh();
});

/* ésto sería lo mismo que lo de arriba, ésta es un función con nombre vs una anónima como la de arriba
btnMas.addEventListener("click", Add);

function Add(){
    contador++;
    label.innerText = contador;
}*/

btnMenos.addEventListener("click", function () {
  contador--;
  Refresh();
});

function Refresh() {
  if (contador % 2 === 0) {
    label.classList.remove("azul");
    label.classList.add("rojo");
  } else {
    label.classList.remove("rojo");
    label.classList.add("azul");
  }
  label.innerText = contador;
}
