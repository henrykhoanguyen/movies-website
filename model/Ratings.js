const Sequelize = require('sequelize');
const connectDB = require("../config/db");

const Ratings = connectDB.define('ratings', {
  // movieId VARCHAR(20) not null,
  // FOREIGN KEY (movieId) REFERENCES movies(id)
  movieId: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: 'movies',
      key: 'id'
    }
  },
  // rating float not null,
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  // numVotes INTEGER not null,
  numVotes: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Ratings;