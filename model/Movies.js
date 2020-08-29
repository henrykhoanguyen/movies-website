const Sequelize = require("sequelize");
const connectDB = require("../config/db");

const Movies = connectDB.define('movies', {
  // id varchar(10) primary key,
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  // title varchar(100) not null,
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // year integer not null,
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  // director varchar(100) not null
  director: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


module.exports = Movies;