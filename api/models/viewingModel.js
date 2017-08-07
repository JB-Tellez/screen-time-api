'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ViewingSchema = new Schema({
  title: String,
  movieId: String,
  showId: String,
  startTime: Date,
  endTime: Date,
  kid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kid'
  }

});

module.exports = mongoose.model('Viewing', ViewingSchema);
