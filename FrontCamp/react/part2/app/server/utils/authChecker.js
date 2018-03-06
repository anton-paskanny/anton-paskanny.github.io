var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) return next();

  return res.send({
    succes: false,
    msg: 'User is not logged in'
  });
};

module.exports = isAuthenticated;
