var express = require('express');
var passport = require('passport');
var User = require('../mongo-schema/userSchema');
var router = express.Router();

router.post('/register', function(req, res) {
  User.register(new User({ email : req.body.email }), req.body.password, function(err, User) {
      if (err) {
          return res.send("register", {info: "Sorry. That email address already exists. Try again."})
      }

      passport.authenticate('local')(req, res, function () {
          res.redirect('/');
      });
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/', );
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.status(200).send("pong!");
});

module.exports = router;
