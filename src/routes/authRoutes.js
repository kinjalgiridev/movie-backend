  const express = require("express");
  const { body } = require("express-validator");
  const { register, login } = require("../controllers/authController");

  const router = express.Router();

  router.post(
    "/register",
    [
      body("email").isEmail().withMessage("Invalid email"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
    ],
    register
  );

  router.post(
    "/login",
    [
      body("email").isEmail().withMessage("Invalid email"),
      body("password").notEmpty().withMessage("Password is required"),
    ],
    login
  );
  a
  module.exports = router;
