const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
  let error = { ...err }
  
  error.messsage = err.messsage;

  console.log(error);
  
}