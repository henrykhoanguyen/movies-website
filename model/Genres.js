const Sequelize = require("sequelize");
const connectDB = require("../config/db");

const Genres = connectDB.define('genres', {
  // id integer auto_increment primary key, 
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // name varchar(32) not null
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Genres;