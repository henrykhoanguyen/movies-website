const mysql = require('mysql2');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config({path: "./config/config.env"});

// Connect to DB
const connectDB = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USERNAME, 
  process.env.DB_PASSWORD, 
  {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: false
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = connectDB;