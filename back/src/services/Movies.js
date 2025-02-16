class Movies {
  constructor({title, year, director, duration, genre, rate, poster}){

    if(!title){
      throw new Error("Se necesita un titulo valido que no este vacío");
    } else if(!director){
      throw new Error("No hay ningún director, se necesita un director valido");
    } else if (!poster){
      throw new Error("No hay un poster, es obligatorío");
    };

    this.title = title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  };
};

module.exports = Movies;