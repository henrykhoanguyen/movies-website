const Sequelize = require('sequelize');
const connectDB = require("../config/db");

const Employees = connectDB.define('employees', {
  // email varchar(50) primary key,
  email: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  // password varchar(20) not null,
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // fullname varchar(100)
  fullname: {
    type: Sequelize.STRING
  }
});

module.exports = Employees;