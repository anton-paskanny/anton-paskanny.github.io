var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.redirect('/signin');
};

module.exports = isAuthenticated;
