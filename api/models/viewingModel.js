'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ViewingSchema = new Schema({
  title: String,
  movieId: String,
  showId: String,
  startTime: {
    type: Date,
    default: new Date()
  },
  endTime: {
    type: Date,
    default: new Date()
  },
  kid: {
    type: Schema.Types.ObjectId,
    ref: 'Kid'
  }

});

module.exports = mongoose.model('Viewing', ViewingSchema);
