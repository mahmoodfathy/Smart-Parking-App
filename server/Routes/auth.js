const authControllers = require("../Controllers/auth");
const authMiddlewares = require("../MiddleWares/Auth");
const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  [
    body("Email").trim().isEmail().withMessage("Please Enter a valid E-mail!"),
    body("Password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Please Enter atleast 6 characters"),
  ],
  authControllers.postSignUp
);
router.post(
  "/login",
  [
    body("Email").trim().isEmail().withMessage("Please Enter a valid E-mail!"),
    body("Password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Please Enter atleast 6 characters"),
  ],
  authControllers.postSignIn
);
router.get("/user", authMiddlewares.isAuth, (req, res) => {
  // req.session.save(() => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  // });
});
router.get("/logout", authControllers.getSignOut);
module.exports = router;
