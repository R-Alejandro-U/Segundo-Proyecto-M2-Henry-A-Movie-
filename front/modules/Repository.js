const Movie = require("./Movie.js");

class Repository{
    constructor(){
        this.movies_colection = [];
    }

    createMovie({title, year, director, duration, genre, rate, poster}){
        const movie = new Movie(title, year, director, duration, genre, rate, poster);
        this.movies_colection.push(movie);
    };
    
    getAllMovies(){
        return this.movies_colection;
    };
}

const repository = new Repository();

module.exports = repository;