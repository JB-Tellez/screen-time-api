var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Family = require('./api/models/familyModel'),
  Kid = require('./api/models/kidModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ScreenTimeDB'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var familyRoutes = require('./api/routes/familyRoutes');
familyRoutes(app);

var kidRoutes = require('./api/routes/kidRoutes');
kidRoutes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);