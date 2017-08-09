'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ViewingSchema = new Schema({
  title: String,
  movieId: String,
  showId: String,
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Viewing', ViewingSchema);
