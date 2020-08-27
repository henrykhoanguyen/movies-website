const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: "./config/config.env"});

const connectDB = async () => {
  // Connect to DB
  const conn = mysql.createConnection({
    host: "localhost",
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE
  });
  
  conn.connect(function(err) {
    if(err){
      console.error(err);
      throw(err);
    }
    console.log('MySQL Connected!'.cyan.bold);
  });

};

module.exports = connectDB;