const db = require('../config/db');
const Movies = require('../model/Movies');
const Stars = require('../model/Stars');
const StarsInMovies = require('../model/StarsInMovies');
const Op = db.Sequelize.Op;

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

// @desc    Search for movies
// @route   GET /api/v1/movies/search/:title/:year/:director/:starName
// @access  Public
exports.search = async (req, res, next) => {
  // const { title, year, director, starName } = req.query;
  const condition = {}
  var movies = null;

  // TODO: need to implement sub query. nested query
  if (req.query.starName){
    condition.starName = { [Op.like]: `%${req.query.starName}%` };

    movies = await Movies.findAll({ where: condition });

  } else {
    if (req.query.title){
      condition.title = { [Op.like]: `%${req.query.title}%` };
    }
    if (req.query.year) {
      condition.year = { [Op.eq]: req.query.year };
    }
    if (req.query.director) {
      condition.director = { [Op.eq]: req.query.director };
    }
    movies = await Movies.findAll({ where: condition, order: ['title']});
  }


  res.status(200).json({
    success: true,
    size: movies.length,
    data: movies
  });
};