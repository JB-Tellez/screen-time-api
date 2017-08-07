'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ViewingSchema = new Schema({
  movieId: String,
  showId: String,
  startTime: Number,
  endTime: Number,
  kid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kid'
  }

});

module.exports = mongoose.model('Viewing', ViewingSchema);
