const db = require('../config/db');
const Movies = require('../model/Movies');

// @desc    Get all movies
// @route   GET /api/v1/movies/
// @access  Public
exports.getMovies = async (req, res, next) => {
  const movies = await Movies.findAll({ limit: 10 });

  // console.log(movies);

  if (!movies) {
    res.status(401).json({
      success: false,
      message: "No record was found..."
    });
  }

  res.status(200).json({
    success: true,
    size: movies.length,
    data: movies
  });

};

// @desc    Get single movie
// @route   GET /api/v1/movies/:id
// @access  Public
exports.getMovieById = async (req, res, next) => {
  const id = req.params.id;
  const movie = await Movies.findByPk(id);

  // console.log(movie);

  if (!movie) {
    res.status(401).json({
      success: false,
      message: "No record was found..."
    });
  }

  res.status(200).json({
    success: true,
    data: movie
  });

};