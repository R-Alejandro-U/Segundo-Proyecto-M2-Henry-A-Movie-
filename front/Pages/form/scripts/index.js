const indexForm = async () =>{
    const renderGenres = require("./moduls/renderGenres");
    const selectGenreRender = require("./moduls/selectGenreRender");
    const bundler = require("./moduls/bundler");
    const resets = require("./moduls/resets");
    const maxYear = require("./moduls/maxYear");
    
    document.addEventListener("DOMContentLoaded", maxYear);
    document.getElementById("genres").addEventListener("input", (event) => selectGenreRender(event));
    renderGenres();
    document.getElementById("form").addEventListener("submit", bundler);
    document.getElementById("reset").addEventListener("click", resets);
}

module.exports = indexForm;