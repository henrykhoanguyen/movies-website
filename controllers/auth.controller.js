const ErrorResponse = require("../utils/errorResponse");
const User = require("../model/User");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = async(req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse("Please enter an email or password", "NoCredential", 400));
  }

  // Get user with given email
  const user = await User.findAll({
    attributes: ["id", "password"],
    where: {
      email: email
    }
  });

  // Check if user exists in database
  if (!user){
    return next(new ErrorResponse("Invalid credentials...", "InvalidCredential", 401));
  }

  // console.log(user[0].dataValues.password);
  // Check if password is correct
  const result = await bcrypt.compare(password, user[0].dataValues.password);
  if (!result){
    // console.log(err);
    return next(new ErrorResponse("Invalid credentials...", "InvalidCredential", 401));
  }

  const token = jwt.sign({ id: user[0].dataValues.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
  .status(200)
  .cookie("token", token, options)
  .json({
    success: true
  });
};


// @desc    Logout user
// @route   GET /api/v1/auth/logout
// @access  Public
exports.logout = async(req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });

  res.status(200).json({
    success: true,
    data: {}
  });
};

// @desc    Get current logged in user
// @route   POST /api/v1/auth/me
// @access  Private
exports.getMe = async(req, res, next) => {
  // console.log(req.user.id);
  res.status(200).json({
    success: true,
    data: req.user
  });
};