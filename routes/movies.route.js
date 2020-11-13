const express = require("express");

const {
  getMovies,
  getMovieById,
  getMoviesByLetter,
  search,
  getMoviesByGenre,
  getGenres
} = require("../controllers/movies.controller");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getMovies);
router.route("/search?:query").get(search);
router.route("/letter/:letter").get(getMoviesByLetter);
router.route("/genres").get(protect, getGenres);
router.route("/:id").get(protect, getMovieById);
router.route("/genre/:genreId").get(protect, getMoviesByGenre);

module.exports = router;