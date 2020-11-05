const jwt = require("jsonwebtoken");
const User = require('../model/User');
const ErrorResponse = require("../utils/errorResponse");

// Protect routes
exports.protect = async (req, res, next) => {
  let token = null;

  // console.log(req.cookies, req.headers.authorization);
  // Using cookie
  // if (req.cookies.token) {
  //   token = req.cookies.token;
  // }

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Set token from Bearer token in header 
    token = req.headers.authorization.split(" ")[1];
  } 

  // Make sure the token exists
  if (!token) {
    return next(new ErrorResponse("Not authorized to access this route...", "Unauthorized", 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findAll({
      attributes: ["id", "firstName", "lastName", "address", "email"],
      where: {
        id: decoded.id
      }
    });

    // console.log("LOGGED USER: ", req.user);
    next();
  } catch {
    return next(new ErrorResponse("Not authorized to access this route...", "Unauthorized", 401));
  }
}