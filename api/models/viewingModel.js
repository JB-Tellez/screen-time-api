'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ViewingSchema = new Schema({
  title: String,
  movieId: String,
  showId: String,
  startTime: Date,
  endTime: Date

});

module.exports = mongoose.model('Viewing', ViewingSchema);
