const Movies = require('../model/Movies');

// @desc    Get all movies
// @route   GET /api/v1/movies/
// @access  Public
exports.getMovies = (req, res, next) => {
  Movies.getAllMovies((err, data) => {
    if (err) {
      res.status(401).json({
        success: false,
        message: err
      });
    }
    res.status(200).json({
      success: true,
      size: data.length,
      data: data
    });
  });
}

// @desc    Get single movie
// @route   GET /api/v1/movies/:id
// @access  Public
exports.getMovieById = (req, res, next) => {
  const id = req.params.id;

  Movies.getMovieById(id, (err, data) => {
    if (err) {
      res.status(401).json({
        success: false,
        message: err
      });
    } else {
      res.status(200).json({
        success: true,
        data: data
      });
    }
  });
}