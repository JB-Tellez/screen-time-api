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
  },
  kid: {
    type: Schema.Types.ObjectId,
    ref: 'Kid'
  }

});

module.exports = mongoose.model('Viewing', ViewingSchema);
