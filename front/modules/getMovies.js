const errorMessage = require("./errorMessage");
const repository = require("./Repository");
const axios = require("axios")

const getMovies = async () => {
    try {
        const { data } =  await axios.get("http://localhost:3001/movies");
        data.movies.forEach(movie => repository.createMovie(movie));
        alert(data.message)
    } catch (err) {
        errorMessage();
        console.error(`Error de catch: ${err}`);
        throw err.message;
    };
};

module.exports = getMovies;
