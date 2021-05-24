const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const passport = require("passport");
require("../Middlewares/passportConfig")(passport);

exports.postSignUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await User.findOne({ Email: req.body.Email }, async (err, user) => {
    // console.log(req.body);
    // console.log(req.body.Email, req.body.Password);
    if (err) {
      throw err;
    }
    if (!user) {
      const hashedPassword = await bcrypt.hash(req.body.Password, 12);
      const newUser = new User({
        Email: req.body.Email,
        username: req.body.username,
        Password: hashedPassword,
      });
      try {
        await newUser.save();
      } catch (err) {
        let requiredEmail;
        let requiredPassword;
        let requiredUsername;
        if (err) {
          if (err.code === 11000) {
            return res.status(400).json({ message: "username already used" });
          }
          if (!err.errors.Password) {
            requiredPassword = "";
          } else {
            requiredPassword = err.errors.Password.message;
          }
          if (!err.errors.Email) {
            requiredEmail = "";
          } else {
            requiredEmail = err.errors.Email.message;
          }
          if (!err.errors.username) {
            requiredUsername = "";
          } else {
            requiredUsername = err.errors.username.message;
          }
          // console.log(err.errors.Email.message);

          // console.log(err.errors.Password, err.errors.Email);

          return res.status(400).json({
            message: { requiredEmail, requiredPassword, requiredUsername },
          });
        }
      }
      return res.status(200).json({
        message: "User created successfully",
      });
    }
    return res.status(400).json({
      message: "User already Exists",
    });
  });
};
exports.postSignIn = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      const statusCode = err.statusCode || 500;
      return res.status(statusCode).json(err);
    }
    req.logIn(user, (error) => {
      if (error) {
        const statusCode = error.statusCode || 500;
        return res.status(statusCode).json(error);
      }

      return res.json({
        message: "Successfully processed authentication",
        statusCode: 200,
      });
    });
  })(req, res, next);
};
exports.getSignOut = (req, res, next) => {
  req.logout();

  return res.status(200).json({ message: "Signed out!" });
};
