'use strict';


var mongoose = require('mongoose'), Kid = mongoose.model('Kid');

exports.list_all_kids = function (req, res) {
  Kid.find({}).populate('family').exec(function (err, kid) {
    if (err)
      res.send(err);
    res.json(kid);
  });
};

exports.create_a_kid = function (req, res) {
  var new_kid = new Kid(req.body);
  new_kid.save(function (err, kid) {
    if (err)
      res.send(err);
    res.json(kid);
  });
};


exports.read_a_kid = function (req, res) {
    console.log('read_a_kid', req.params.kidId);
  Kid.findById(req.params.kidId).populate('family').exec(function (err, kid) {
    if (err)
      res.send(err);
    res.json(kid);
  });
};

exports.update_a_kid = function (req, res) {
  Kid.findOneAndUpdate({
    _id: req.params.kidId
  }, req.body, {
    new: true
  }, function (err, kid) {
    if (err)
      res.send(err);
    res.json(kid);
  });
};

exports.delete_a_kid = function (req, res) {

    Kid.remove({
    _id: req.params.kidId
  }, function (err, kid) {
    if (err)
      res.send(err);
    res.json({
      message: 'Kid successfully deleted'
    });
  });
};
