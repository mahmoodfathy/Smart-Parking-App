exports.isAuth = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    return res.status(401).json({ message: "you are not Authorized" });
  }
};
