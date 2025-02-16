const list_genres = require("./list_genres");

const renderGenres = () => {
    const dataList = document.getElementById("list_genres");
    
    if(!dataList) {
        throw new Error("No se encontró la dataList");
    }

    dataList.innerHTML = "";

    list_genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre.value;
        option.textContent = genre.name;
        dataList.appendChild(option);
    });
};

module.exports = renderGenres;