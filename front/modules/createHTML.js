function createHTML({title, year, director, duration, genre, rate, poster}){
    const createDiv = document.createElement("div");
    const createTitle = document.createElement("h2");
    const createTitleA = document.createElement("a");
    const createYear = document.createElement("p");
    const createDirector = document.createElement("p");
    const createDuration = document.createElement("p");
    const createGenre = document.createElement("div");
    const createRate = document.createElement("p");
    const create_div_rate = document.createElement("div");
    const createPoster = document.createElement("img");
    const createInfo = document.createElement("div");

    
    const stars = (rate) => {
        const number_stars = Math.floor(rate/2);
        const star = "./Assets/vsg/star-svgrepo-com.svg";
        const half_star = "./Assets/vsg/star-sharp-half-svgrepo-com (1).svg";
        const create_div_star = document.createElement("div");
        create_div_star.innerHTML = ""
        let i = 0;

        while(i < number_stars){
            const createStar = document.createElement("img");
            createStar.innerHTML = "";
            createStar.src = star;
            createStar.classList.add("stars");
            create_div_star.appendChild(createStar);
            i++
        };
        
        if(rate % 1 >= 0.5 || rate === 1 || rate % 2 !== 0){
            const createStar = document.createElement("img");
            createStar.innerHTML = "";
            createStar.src = half_star;
            createStar.classList.add("stars");
            create_div_star.appendChild(createStar);
        };
        
        create_div_star.classList.add("content_star");
        return create_div_star;
    };

    createTitle.innerHTML = title;
    createTitleA.href = "#";
    createYear.innerHTML = `Estrenó: ${year}.`;
    createDirector.innerHTML = `Director: ${director}.`;
    createDuration.innerHTML = `Duración de la película: ${duration}.`;
    createGenre.innerHTML = `Género: ${genre}.`;
    createRate.innerHTML = `Calificación: ${rate}`;
    create_div_rate.appendChild(stars(rate));
    createPoster.src = poster;

    createInfo.classList.add("info");
    createDiv.classList.add("cards");
    
    createInfo.append(createDuration, createRate, create_div_rate,createDirector, createYear, createGenre);
    createTitleA.appendChild(createTitle);
    createDiv.append(createTitleA, createPoster, createInfo);

    const container = document.getElementById("Movies");
    container.appendChild(createDiv);
};

module.exports = createHTML;