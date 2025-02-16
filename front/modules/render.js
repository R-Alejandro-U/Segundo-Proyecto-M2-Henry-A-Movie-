const repository = require("./Repository.js");
const createHTML = require("./createHTML.js");


function render() {
    const container = document.getElementById("Movies");
    container.innerHTML = "";
    repository.getAllMovies().forEach((movie) => createHTML(movie));
};

module.exports = render;