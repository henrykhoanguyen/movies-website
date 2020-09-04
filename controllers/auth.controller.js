const ErrorResponse = require("../utils/errorResponse");
const User = require("../model/User");

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = (req, res, next) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please enter an email or password", "NoCredential", 400));
  }
};