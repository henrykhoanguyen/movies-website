const ErrorResponse = require("../utils/errorResponse");
const db = require('../config/db');
const Movies = require('../model/Movies');
const Stars = require('../model/Stars');
const Genres = require('../model/Genres');
const GenresInMovies = require('../model/GenresInMovies');
const StarsInMovies = require('../model/StarsInMovies');
const Op = db.Sequelize.Op;
// Association
Movies.hasMany(StarsInMovies, { foreignKey: 'movieId' });
Movies.hasMany(GenresInMovies, { foreignKey: 'movieId' });
Stars.hasMany(StarsInMovies, { foreignKey: 'starId' });
Genres.hasMany(GenresInMovies, { foreignKey: 'genreId'});

StarsInMovies.belongsTo(Movies, { foreignKey: 'movieId' });
StarsInMovies.belongsTo(Stars, { foreignKey: 'starId' });
GenresInMovies.belongsTo(Movies, { foreignKey: 'movieId'});
GenresInMovies.belongsTo(Genres, { foreignKey: 'genreId'});


// @desc    Get all movies
// @route   GET /api/v1/movies/
// @access  Public
exports.getMovies = async (req, res, next) => {

  const limit = parseInt(req.query.limit) || 100;

  // Get movies from database
  var movies = await Movies.findAll({ limit: limit });

  // Get stars from movies
  movies = await getStars(movies);
  // Get genres of movies
  movies = await getGenres(movies);

  // console.log(movies);

  if (!movies || movies.length === 0) {
    return next(new ErrorResponse("No record was found...", "NoRecord", 404));
  }

  // Pagination
  // const currPage = parseInt(req.query.page, 10) || 1;
  // const itemPerPage = parseInt(req.query.perPage, 10) || 30;
  // const startIndex = (currPage - 1) * itemPerPage;
  // const endIndex = currPage * itemPerPage;

  // const pagination = {}

  // if (endIndex < movies.length){
  //   pagination.next = currPage + 1;
  // }

  // if (startIndex > 0){
  //   pagination.prev = currPage - 1;
  // }

  // pagination.startIndex = startIndex;
  // pagination.endIndex = endIndex;

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

  const stars = await Stars.findAll({
    include: [{
      attributes: [],
      model: StarsInMovies,
      where: {
        movieId: movieId
      }
    }],
    required: false,
    order: ['name']
  });

  movie.dataValues.starsSize = stars.length || 0;
  movie.dataValues.stars = stars;


  const genres = await Genres.findAll({
    include: [{
      attributes: [],
      model: GenresInMovies,
      where: {
        movieId: movieId
      }
    }],
    required: false,
    order: ['name']
  });
      
  movie.dataValues.genresSize = genres.length || 0;
  movie.dataValues.genres = genres;

  if (!movie || movie === []) {
    return next(new ErrorResponse("No record was found...", "NoRecord", 404));
  }

  res.status(200).json({
    success: true,
    data: movie
  });

};


// @desc    Get movies starts with letter
// @route   GET /api/v1/movies/letter/:letter
// @access  Public
exports.getMoviesByLetter = async(req, res, next) => {
  const letter = req.params.letter;

  var movies = await Movies.findAll({
    where: {
      title: { [Op.like]: `${letter}%` }
    },
    order: ['title']
  });

  movies = await getStars(movies);
  // Get genres of movies
  movies = await getGenres(movies);

  res.status(200).json({
    success: true,
    size: movies.length,
    data: movies
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
    condition.name = { [Op.like]: `%${req.query.starName}%` };

    // Get stars with search name from database
    movies = await Movies.findAll({ 
      where: {
        '$stars_in_movies.star.name$': condition.name
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
    // Get genres of movies
    movies = await getGenres(movies);
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
    console.log(movies);

    // Get stars from movies
    movies = await getStars(movies);
    // Get genres of movies
    movies = await getGenres(movies);
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


// @desc    Get movies by genres
// @route   GET /api/v1/movies/genre/:genre
// @access  Public
exports.getMoviesByGenre = async(req, res, next) => {
  
  var genre = { [Op.eq]: `${req.params.genre}` };
  
  var movies = await Movies.findAll({ 
    where: {
      '$genres_in_movies.genre.name$': genre
    },
    include: [{
      attributes: [],
      model: GenresInMovies,
      include: [{
        model: Genres
      }]
    }],
    order: ['title']
  });
  
  // Get stars in movies
  movies = await getStars(movies);
  // Get genres of movies
  movies = await getGenres(movies);
  
  if (!movies || movies.length === 0) {
    return next(new ErrorResponse("No record was found...", "NoRecord", 404));
  }
  
  
  res.status(200).json({
    success: true,
    size: movies.length,
    data: movies
  });
};

// @desc    Get all genres
// @route   GET /api/v1/movies/genres/
// @access  Public
exports.getGenres = async(req, res, next) => {
  var genres = await Genres.findAll({});
  
  if (!genres || genres.length === 0) {
    return next(new ErrorResponse("No record was found...", "NoRecord", 404));
  }
  
  res.status(200).json({
    success: true,
    size: genres.length || 0,
    data: genres
  });
}

const getStars = async (movies) => {
  
    for(var i = 0; i < movies.length; i++) {
      var movieId = movies[i].dataValues.id;

      const stars = await Stars.findAll({
        attributes: [ 'id', 'name', 'birthYear'],
        include: [{
          attributes: [],
          model: StarsInMovies,
          where: {
            movieId: movieId
          }
        }],
        required: false,
        order: ['name']
      });
      
      movies[i].dataValues.starsSize = stars.length || 0;
      movies[i].dataValues.stars = stars;
    }

    return movies;
};

const getGenres = async (movies) => {

  for(var i = 0; i < movies.length; i++) {
    var movieId = movies[i].dataValues.id;

    const genres = await Genres.findAll({
      include: [{
        attributes: [],
        model: GenresInMovies,
        where: {
          movieId: movieId
        }
      }],
      required: false,
      order: ['name']
    });
    
    movies[i].dataValues.genresSize = genres.length || 0;
    movies[i].dataValues.genres = genres;
  }

  return movies;
} 