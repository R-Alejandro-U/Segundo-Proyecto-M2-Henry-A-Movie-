const { Router } = require("express");
const { routerMovies } = require("./routerMovies");
const router = Router();

router.use("/movies", routerMovies);

module.exports = router;