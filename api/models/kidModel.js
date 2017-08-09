'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var KidSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter kid name'
  },
  minutesPerWeek: {
    type: Number,
    default: 0
  },
  viewings: [{
    type: Schema.Types.ObjectId,
    ref: 'Viewing'
  }],
  bedTimes: [{
    type: Date,
    default: [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()]
  }]
});

module.exports = mongoose.model('Kid', KidSchema);
