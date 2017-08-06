'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FamilySchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter family name'
  },
  password: {
    type: String,
    Required: 'Kindly enter family password'
  },
  kids: [{
    type: Schema.Types.ObjectId,
    ref: 'Kid'
  }]
});

module.exports = mongoose.model('Family', FamilySchema);
