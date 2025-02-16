const postNewMovie = require("./postNewMovie");

const bundler = async (event) => {
    event.preventDefault();
    const containerGenres = document.getElementById("containerGenres");
    const form = document.getElementById("form");

    const title = document.getElementById("title").value;
    const year = Number(document.getElementById("year").value);
    const director = document.getElementById("director").value;
    const durationHours = document.getElementById("duration_h").value;
    const durationMinutes = document.getElementById("duration_min").value;
    const genres = Array.from(containerGenres.querySelectorAll("div")).map(genre => genre.textContent);
    const rate = Number(document.getElementById("rate").value);
    const poster = document.getElementById("poster").value;

    // Validación de datos
    function validationData() {
        if (!title) return alert("Por favor, complete el campo de Título.");
        if (!year || isNaN(year)) return alert("Por favor, ingrese un Año válido.");
        if (!director) return alert("Por favor, complete el campo de Director.");
        if (!durationHours || isNaN(durationHours) || !durationMinutes || isNaN(durationMinutes)) {
            return alert("Por favor, ingrese una Duración válida (horas y minutos).");
        }
        if (genres.length === 0) return alert("Por favor, seleccione al menos un Género.");
        if (!rate || isNaN(rate)) return alert("Por favor, ingrese una Calificación válida.");
        if (!poster) return alert("Por favor, complete el campo de Cartel.");
        return true;
    }

    // Si la validación pasa, proceder con el envío
    if (validationData()) {
        const data = {
            title,
            year,
            director,
            duration: `${durationHours}h ${durationMinutes}min`,
            genre: genres,
            rate,
            poster,
        };
        
        const confir = confirm("¿Estás seguro de que deseas enviar ya la película?");
        if (confir) {

            try {
                await postNewMovie(data);
                
                
                // Limpiar cada campo manualmente
                containerGenres.innerHTML = "";
                form.title.value = "";
                form.year.value = "";
                form.director.value = "";
                form.duration_h.value = "";
                form.duration_min.value = "";
                form.rate.value = "";
                form.poster.value = "";
                
                alert("La película se ha enviado y el formulario ha sido restablecido.");
            } catch (error) {
                console.error(`Error al enviar la película: ${error}`);
                alert("Hubo un problema al enviar la película. Inténtalo de nuevo.");
            };

        } else {
            alert("El formulario no ha sido enviado.");
        };
    }
};

module.exports = bundler;