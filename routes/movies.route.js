const express = require("express");

const {
  getMovies,
  getMovieById,
  getMovieByLetter,
  search
} = require("../controllers/movies.controller");

const { protect } = require("../middleware/auth");

const router = express.Router();

router.route("/").get(getMovies);
router.route("/search?:query").get(search);
router.route("/letter/:letter").get(getMovieByLetter);
router.route("/:id").get(protect, getMovieById);

module.exports = router;