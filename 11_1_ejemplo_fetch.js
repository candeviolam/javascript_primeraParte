const div = document.getElementById("app");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
let page = 1;

window.onload = function () {
  CallServer();
};

btnNext.addEventListener("click", function () {
  page++;
  CallServer();
});
btnPrev.addEventListener("click", function () {
  page--;
  CallServer();
});

function DrawCard(img, nombre) {
  return `<div class="card" style="width: 18rem;">
    <img src="${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
    </div>
  </div>`;
}

function CallServer() {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`) // character/?page=2 -> me cambia los personajes
    .then((res) => res.json())
    .then((response) => {
      let htmlString = "";
      response.results.forEach((element) => {
        htmlString += DrawCard(element.image, element.name);
      });

      div.innerHTML = htmlString;
    })
    .catch((err) => console.log(err));
}


//en lugar de recibir los valores, recibimos el objejo entero! El obj con sus propiedades
/*
function DrawCard(NuevoPersonaje) {
  return `<div class="card" style="width: 18rem;">
      <img src="${NuevoPersonaje.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${NuevoPersonaje.nombre}</h5>
      </div>
    </div>`;
}

function CallServer() {
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((res) => res.json())
    .then((response) => {
      let htmlString = "";
      response.results.forEach((element) => {
        const NuevoPersonaje = new Personaje(elemente.image, element.name);
        htmlString += DrawCard(NuevoPersonaje);
      });

      div.innerHTML = htmlString;
    })
    .catch((err) => console.log(err));
}

class Personaje {
  nombre = "";
  imagen = "";

  constructor(nombre, imagen) {
    this.nombre = nombre;
    this.imagen = imagen;
  }
}
*/
