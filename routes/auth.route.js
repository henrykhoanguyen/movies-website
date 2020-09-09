const express = require("express");

const router = express.Router();

const {
  login,
  logout,
  getMe
} = require("../controllers/auth.controller");

const { protect } = require("../middleware/auth");

router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").post(protect, getMe);

module.exports = router;