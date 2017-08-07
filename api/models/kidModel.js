'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var KidSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter kid name'
  },
  family: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Family'
  },
  viewings: [{
    type: Schema.Types.ObjectId,
    ref: 'Viewing'
  }]
});

module.exports = mongoose.model('Kid', KidSchema);
