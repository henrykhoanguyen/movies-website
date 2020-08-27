const express = require("express");

const {
  getMovies,
  getMovieById
} = require("../controllers/movies.controller");

const router = express.Router();

router.route("/").get(getMovies);

router.route("/:id").get(getMovieById);

module.exports = router;