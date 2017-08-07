'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var KidSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter kid name'
  },
  viewings: [{
    type: Schema.Types.ObjectId,
    ref: 'Viewing'
  }],
  bedTimes: [{
    type: Date,
    default: Date.now
  }],
  family: {
    type: Schema.Types.ObjectId,
    ref: 'Family'
  }
});

module.exports = mongoose.model('Kid', KidSchema);
