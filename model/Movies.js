const Sequelize = require("sequelize");
const connectDB = require("../config/db");

// var Movies = (data) => {
//   this.data = data.data;
//   this.status = data.status;
//   this.createAt = new Date();
// };

const Movies = connectDB.define('movies', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  director: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// Movies.getAllMovies = (result) => {
//   connectDB.query("SELECT * FROM movies LIMIT 10", (err, res) => {
//     if(err) {
//       console.error("Error: ", err);
//       result(null, err);
//     } else {
//       // console.log("Result: ", res);
//       result(null, res);
//     }
//   });
// };

// Movies.getMovieById = (movieId, result) => {
//   connectDB.query("SELECT * FROM movies WHERE movies.id = ?", movieId, (err, res) => {
//     if(err) {
//       console.error("Error: ", err);
//       result(null, err);
//     } else {
//       console.log("Result: ", res);
//       result(null, res);
//     }
//   });
// };

module.exports = Movies;