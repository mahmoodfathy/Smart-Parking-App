const { Strategy } = require("passport-local");
// const passport = require("passport");
const User = require("../Models/User");
const bcrypt = require("bcryptjs");

const LocalStrategy = (passport) => {
  passport.use(
    new Strategy(
      {
        passReqToCallback: true,
        usernameField: "Email",
        passwordField: "Password",
      },
      async (req, Email, Password, done) => {
        await User.findOne({ Email: req.body.Email }, async (err, user) => {
          // console.log(user);
          let message = "Internal server error";
          if (err) {
            return done({ message, statusCode: 500 }, null);
          }
          if (!user) {
            message = "User doesnt exist";
            return done({ message, statusCode: 400 }, null);
          }
          const userPassowrd = user.Password;

          // console.log(userPassowrd);
          const isValidPassword = await bcrypt.compare(Password, userPassowrd);
          if (!isValidPassword) {
            return done(
              { message: "Email or Password is incorrect", statusCode: 400 },
              null
            );
          }
          const currentUser = user;
          done(null, currentUser);
        });
      }
    )
  );
  passport.serializeUser((user, cb) => {
    // console.log(user);
    // console.log(req.body.Email);
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
        Email: user.Email,
        userImage: user.userImage,
        _id: user.id,
        isAdmin: user.isAdmin,
      };
      cb(err, userInformation);
    });
  });
};
module.exports = LocalStrategy;
