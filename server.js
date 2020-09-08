const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const colors = require("colors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const bodyParser = require("body-parser");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to DB
connectDB.authenticate()
  .then(() => console.log("Database connected...".cyan.bold))
  .catch(err => console.log("Error: " + err));

// Route files
const movies = require('./routes/movies.route');
const auth = require('./routes/auth.route')

const app = express();

// Body parser
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/movies', movies);
app.use('/api/v1/auth', auth);

connectDB.sync();

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

