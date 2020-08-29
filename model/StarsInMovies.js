const Sequelize = require('sequelize');
const connectDB = require("../config/db");

const StarsInMovies = connectDB.define('stars_in_movies', {
  // starId varchar(10) not null,
  // FOREIGN KEY (starId) REFERENCES stars(id),
  starId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'stars',
      key: 'id'
    }
  },
  // movieId varchar(10) not null,
  // foreign key (movieId) REFERENCES movies(id)
  movieId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'movies',
      key: 'id'
    }
  }
});

module.exports = StarsInMovies;