class ErrorResponse extends Error {
  constructor(message, name, statusCode){
    super(message);
    this.name = name;
    this.statusCode = statusCode;
  }
}

module.exports = ErrorResponse;