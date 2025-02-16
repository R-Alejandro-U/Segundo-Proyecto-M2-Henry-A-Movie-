const messages = require("./errorMessages");
const movies = document.getElementById("Movies")
const errorMessage = () =>{
    const error = document.createElement("h2");
    document.getElementById("loa").innerHTML = "Error";
    error.innerHTML = messages[Math.floor(Math.random() * messages.length)];
    movies.appendChild(error);
};

module.exports = errorMessage;