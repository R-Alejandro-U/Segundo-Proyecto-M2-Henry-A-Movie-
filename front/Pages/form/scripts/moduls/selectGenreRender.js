const list_genres = require("./list_genres");

function selectGenreRender(event) {
    const containerGenres = document.getElementById("containerGenres");
    const selectGenre = event.target.value;
    const includes = Array.from(containerGenres.children);

    if (includes.some(genre => genre.textContent === selectGenre)) {
        event.target.value = "";
        return alert("Lo siento, no pueden haber géneros repetidos.");
    }

    if (list_genres.some(genre => genre.value === selectGenre)) {
        const element = document.createElement("div");
        element.textContent = selectGenre;
        containerGenres.appendChild(element);
        event.target.value = "";
    }
};

module.exports = selectGenreRender;