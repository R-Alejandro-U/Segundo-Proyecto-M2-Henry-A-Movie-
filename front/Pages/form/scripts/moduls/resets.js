function resets(event){
    const confir = confirm("¿Estás seguro de que deseas borrar la información?")    
    if(confir) {
        const containerGenres = document.getElementById("containerGenres");
        containerGenres.innerHTML = "";
        setTimeout( () => alert("Se borró exitosamente"), 500)
    } else {
        event.preventDefault();
        alert("No se borró nada");
    };
};

module.exports = resets;