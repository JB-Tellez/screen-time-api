var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Family = require('./api/models/familyModel'),
  Kid = require('./api/models/kidModel'),
  Viewing = require('./api/models/viewingModel'),
  bodyParser = require('body-parser');

  const cors = require('cors')({ exposedHeaders: ['X-ResponseTime'] });

const session = require('express-session');
const passport = require('passport');
require("dotenv").config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const passportSetup = require('./config/passport');
passportSetup(passport);

app.use(cors);

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var familyRoutes = require('./api/routes/familyRoutes');
familyRoutes(app);

var kidRoutes = require('./api/routes/kidRoutes');
kidRoutes(app);

var viewingRoutes = require('./api/routes/viewingRoutes');
viewingRoutes(app);

var authRoutes = require('./api/routes/authRoutes');
authRoutes(app);

app.use(function (req, res) {
  res.status(404).send({
    url: req.originalUrl + ' not found'
  })
});

// error handler
app.use(function (err, req, res, next) {
  res.status(200).send('bummer');
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
