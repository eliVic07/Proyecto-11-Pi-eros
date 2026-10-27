const popup = document.getElementById("popup");
const aceptar = document.getElementById("aceptar");
const cerrar = document.getElementById("cerrar");
const borrar = document.getElementById("borrar");

if (localStorage.getItem("cookies") != "aceptadas") {
    popup.classList.remove("ocultar");
}

aceptar.addEventListener("click", function () {
    localStorage.setItem("cookies", "aceptadas");
    popup.classList.add("ocultar");
});

cerrar.addEventListener("click", function () {
    popup.classList.add("ocultar");
});

borrar.addEventListener("click", function () {
    localStorage.removeItem("cookies");
    popup.classList.remove("ocultar");
});