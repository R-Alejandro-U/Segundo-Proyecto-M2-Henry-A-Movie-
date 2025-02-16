const indexForm = require("../Pages/form/scripts");

const currentPath = window.location.pathname;


if (currentPath.endsWith("form/index.html")) {
    console.log("Estamos en la página del formulario.");
    indexForm();
} else if (currentPath.endsWith("index.html") || currentPath === "/") {
    console.log("Estamos en la página principal (home).");

    const getMovies = require("../modules/getMovies");
    const render = require("../modules/render");

    document.addEventListener("DOMContentLoaded", () => {
        getMovies().then(() => render()).catch((err) => console.error(`Hubo problemas para renderizar todo: error: ${err}`));
    });
};
