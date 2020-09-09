const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err }
  
  error.messsage = err.messsage;

  console.log(err);

  if (err.name === "NoRecord") {
    const message = "Resource not found...";
    error = new ErrorResponse(message, err.name, 404);
  }

  if (err.name === "NoCredential") {
    const message = err.message;
    error = new ErrorResponse(message, err.name, 400);
  }

  if (err.name === "InvalidCredential") {
    const message = err.message;
    error = new ErrorResponse(message, err.name, 401);
  }

  if (err.name === "Unauthorized") {
    const message = err.message;
    error = new ErrorResponse(message, err.name, 401);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error"
  });
}

module.exports = errorHandler;