const Movies = require("./Movies");
const Movie = require("../moduls/Movie")

module.exports = {
  getMovies: async () => {
    try {
      const movies = await Movie.find();
      console.log("todo fue bien");
      return movies.map(movie => new Movies(movie));
      
    } catch (e) {
      console.error("Error al obtener peliculas:", e);
      throw e;
    };
  },

  createMovie: async (movie) => {
    try {
      const newMovie = new Movies(movie);
      const savedMovie = await Movie.create(newMovie);
      return savedMovie;
      
    } catch (e) {
      console.error("Error al crear película:", e);
      throw e;
    };
  },
};