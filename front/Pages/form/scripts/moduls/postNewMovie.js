const axios = require("axios")

const postNewMovie = async (data) => {
    try {
        const res = await axios.post("http://localhost:3001/movies", data);
        console.log(`Respuesta del servidor: ${res.data}`);
    } catch (error) {
        console.error(`Hubo un error: ${error}`);
        throw error; // Lanza el error para manejarlo en `bundler`
    }
};

module.exports = postNewMovie;