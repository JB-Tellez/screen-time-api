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
  }
});

module.exports = mongoose.model('Kid', KidSchema);
