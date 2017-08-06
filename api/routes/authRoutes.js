module.exports = function (app) {
const express    = require('express');
const passport   = require('passport');
const bcrypt     = require('bcrypt');

// Our family model
const Family       = require('../models/familyModel');

app.post('/auth/signup', (req, res, next) => {
  const name = req.body.name;
  const password = req.body.password;

  if (!name || !password) {
    res.status(400).json({ message: 'Provide name and password' });
    return;
  }

  Family.findOne({ name }, '_id', (err, foundUser) => {
    if (foundUser) {
      res.status(400).json({ message: 'The name already exists' });
      return;
    }

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    const theUser = new Family({
      name,
      password: hashPass
    });

    theUser.save((err) => {
      if (err) {
        res.status(400).json({ message: 'Something went wrong' });
        return;
      }

      req.login(theUser, (err) => {
        if (err) {
          res.status(500).json({ message: 'Something went wrong' });
          return;
        }

        res.status(200).json(req.user);
      });
    //   }
    });
  });
});

app.post('/auth/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong' });
      return;
    }

    if (!theUser) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(theUser, (err) => {
      if (err) {
        res.status(500).json({ message: 'Something went wrong' });
        return;
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

app.post('/auth/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

app.get('/auth/loggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user);
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
});

app.get('/private', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json({ message: 'This is a private message' });
    return;
  }

  res.status(403).json({ message: 'Unauthorized' });
});
}