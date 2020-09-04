const ErrorResponse = require("../utils/errorResponse");
const db = require('../config/db');
const Movies = require('../model/Movies');
const Stars = require('../model/Stars');
const StarsInMovies = require('../model/StarsInMovies');
const Op = db.Sequelize.Op;
// Association
Movies.hasMany(StarsInMovies, { foreignKey: 'movieId' });
Stars.hasMany(StarsInMovies, { foreignKey: 'starId' });
StarsInMovies.belongsTo(Movies, { foreignKey: 'movieId' });
StarsInMovies.belongsTo(Stars, { foreignKey: 'starId' });


// @desc    Get all movies
// @route   GET /api/v1/movies/
// @access  Public
exports.getMovies = async (req, res, next) => {

  // Get movies from database
  var movies = await Movies.findAll({ limit: 10 });

  // Get stars from movies
  movies = await getStars(movies);

  // console.log(movies);

  if (!movies || movies.length === 0) {
    return next(new ErrorResponse("No record was found...", "NoRecord", 404));
  }

  res.status(200).json({
    success: true,
    size: movies.length || 0,
    data: movies
  });

};

// @desc    Get single movie
// @route   GET /api/v1/movies/:id
// @access  Public
exports.getMovieById = async (req, res, next) => {
  const id = req.params.id;
  const movie = await Movies.findByPk(id);

  const movieId = movie.dataValues.id;

  const stars = await StarsInMovies.findAll({
    where: { 
      movieId: movieId
    },
    include: [{
      model: Stars
    }],
    required: false
  });
  movie.dataValues.starsSize = stars.length || 0;
  movie.dataValues.stars = stars;

  if (!movie || movie === []) {
    return next(new ErrorResponse("No record was found...", "NoRecord", 404));
  }

  res.status(200).json({
    success: true,
    data: movie
  });

};

// @desc    Search for movies
// @route   GET /api/v1/movies/search?:query (:query = title&year&director&starName)
// @access  Public
exports.search = async (req, res, next) => {

  const condition = {}
  var movies = null;

  if (req.query.starName){
    // SEARCH MOVIES BY STAR'S NAME
    // Setting query condition
    // condition.name = { [Op.like]: `%${req.query.starName}%` };

    // Get stars with search name from database
    movies = await Movies.findAll({ 
      where: {
        '$stars_in_movies.star.name$': { [Op.like]: `%${req.query.starName}%` }
      },
      include: [{
        attributes: [],
        model: StarsInMovies,
        include: [{
          model: Stars
        }]
      }],
      order: ['title']
    });

    // console.log(movies)
    movies = await getStars(movies);

  } else {
    // SEARCH MOVIES BY TITLE, YEAR, DIRECTOR
    // Setting query condition
    if (req.query.title){
      condition.title = { [Op.like]: `%${req.query.title}%` };
    }
    if (req.query.year) {
      condition.year = { [Op.eq]: req.query.year };
    }
    if (req.query.director) {
      condition.director = { [Op.eq]: req.query.director };
    }

    // Get movies from database
    movies = await Movies.findAll({ where: condition, order: ['title'] });

    // Get stars from movies
    movies = await getStars(movies);
  }

  if (!movies || movies.length === 0) {
    return next(new ErrorResponse("No record was found...", "NoRecord", 404));
  }
  
  res.status(200).json({
    success: true,
    size: movies.length,
    data: movies
  });
};

const getStars = async (movies) => {
  
    for(var i = 0; i < movies.length; i++) {
      var movieId = movies[i].dataValues.id;
  
      const stars = await StarsInMovies.findAll({
        where: { 
          movieId: movieId
        },
        include: [{
          model: Stars
        }],
        required: false
      });

      movies[i].dataValues.starsSize = stars.length;
      movies[i].dataValues.stars = stars;
    }

    return movies;
};