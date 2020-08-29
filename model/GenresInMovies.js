const Sequelize = require('sequelize');
const connectDB = require("../config/db");

const GenresInMovies = connectDB.define('genres_in_movies', {
  // genreId integer not null,
  // FOREIGN KEY (genreId) REFERENCES genres(id),
  genreId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'genres',
      key: 'id'
    }
  },
  // movieId VARCHAR(10) not null,
  // FOREIGN KEY (movieId) REFERENCES movies(id)
  movieId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'movies',
      key: 'id'
    }
  }
});

module.exports = GenresInMovies;