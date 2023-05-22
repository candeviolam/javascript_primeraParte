//#region Login
const MENSAJES = {
  error: "Las contraseñas deben coincidir",
};

const DB = {
  usuario: "usuario",
};

//recuperar los elems del html a los cuales les vamos a asignar los eventos que deseamos escuchar
const submit = document.getElementById("submit");
const inputMail = document.getElementById("inputmail");
const inputPassword = document.getElementById("inputpass");

let mail = "";
let password = "";

//                               función anónima
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const usuarioLocalStorage = JSON.parse(localStorage.getItem(DB.usuario));
  if (
    usuarioLocalStorage.nombre !== mail ||
    usuarioLocalStorage.password !== password
  ) {
    alert("Los datos no son correctos");
  } else {
    alert("Bienvenido " + mail);
  }
});

inputMail.addEventListener("change", function (e) {
  //     para que me lleve al valor que ingresó el usuario
  mail = e.target.value;
});

inputPassword.addEventListener("change", function (e) {
  //     para que me lleve al valor que ingresó el usuario
  password = e.target.value;
});
//#endregion

//#region Creación usuario
const inputCreateMail = document.getElementById("inputcreatemail");
const inputCreatePass = document.getElementById("inputcreatepass");
const inputRepeatPass = document.getElementById("inputrepeatpass");
const lblError = document.querySelector("#lblError");
const saveChanges = document.getElementById("btnsave");

let createMail = "";
let createPass = "";
let repeatPass = "";

inputCreateMail.addEventListener("change", function (e) {
  createMail = e.target.value;
});

inputCreatePass.addEventListener("change", function (e) {
  createPass = e.target.value;
});

inputRepeatPass.addEventListener("change", function (e) {
  repeatPass = e.target.value;
});

saveChanges.addEventListener("click", function (e) {
  e.preventDefault();

  if (createPass !== repeatPass) {
    lblError.innerHTML = MENSAJES.error;
    lblError.style.display = "block";
    setTimeout(() => {
      lblError.style.display = "none";
    }, 1000);
  } else {
    localStorage.setItem(
      DB.usuario,
      JSON.stringify({
        nombre: createMail,
        password: createPass,
      })
    );
  }
});

//#endregion
