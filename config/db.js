const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: "./config/config.env"});

// Connect to DB
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.USER_MYSQL,
  password: process.env.PASSWORD_MYSQL,
  database: process.env.DATABASE
});

connection.connect(function(err) {
  if(err){
    console.error(err);
    throw(err);
  }
  console.log('MySQL Connected!'.cyan.bold);
});


module.exports = connection;