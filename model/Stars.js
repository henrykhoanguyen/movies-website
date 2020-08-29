const Sequelize = require("sequelize");
const connectDB = require("../config/db");
const { Model } = require("sequelize");

const Stars = connectDB.define("stars", {
  // id varchar(10) primary key,
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  // name varchar(100) not null,
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // birthYear integer
  birthYear: {
    type: Sequelize.INTEGER
  }
});

module.exports = Stars;