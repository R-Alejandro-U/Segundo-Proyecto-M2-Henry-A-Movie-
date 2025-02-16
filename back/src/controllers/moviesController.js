const moviesService = require("../services/moviesService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesService.getMovies();
            res.status(200).json({
                movies,
                message: `Gracias gracias, doy clases los jueves, no cobro mucho. "Sherk"`,
            });
        } catch (e) {
            res.status(500).json({message: `Hubo un error en el servidor.Error: ${e}`});
        };
    },

    createMovie: async (req, res) => {
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            const newMovie = await moviesService.createMovie({title, year, director, duration, genre, rate, poster});
            res.status(201).json("Se creo de forma correcta.");
        } catch (e) {
            res.status(500).json({message: `Hubo un error al crear la pelicula: ${e}`});
        };
    },
};

