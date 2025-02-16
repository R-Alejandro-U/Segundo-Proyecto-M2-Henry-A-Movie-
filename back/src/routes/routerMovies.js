const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const validations = require("../middlewares/validations");
const routerMovies = Router();

routerMovies.get("/", moviesController.getAllMovies);
routerMovies.post("/", validations.validations ,moviesController.createMovie);

module.exports = {
    routerMovies,
};