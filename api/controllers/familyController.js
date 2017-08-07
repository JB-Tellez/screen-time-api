'use strict';


var mongoose = require('mongoose'),
  Family = mongoose.model('Family');

exports.list_all_families = function (req, res) {
  Family.find({}).populate('kids').exec(function (err, family) {
    if (err)
      res.send(err);
    res.json(family);
  });
};

exports.create_a_family = function (req, res) {
  var new_family = new Family(req.body);
  new_family.save(function (err, family) {
    if (err)
      res.send(err);
    res.json(family);
  });
};


exports.read_a_family = function (req, res) {

  Family.findById(req.params.familyId).populate({ 
     path: 'kids',
     populate: {
       path: 'viewings',
       model: 'Viewing'
     } 
  }).exec(function (err, family) {
    if (err)
      return res.status(500);
    res.json(family);
  });
};

exports.update_a_family = function (req, res) {
  Family.findOneAndUpdate({
    _id: req.params.familyId
  }, req.body, {
    new: true
  }, function (err, family) {
    if (err)
      res.send(err);
    res.json(family);
  });
};

exports.delete_a_family = function (req, res) {

  Family.remove({
    _id: req.params.familyId
  }, function (err, family) {
    if (err)
      res.send(err);
    res.json({
      message: 'Family successfully deleted'
    });
  });
};
