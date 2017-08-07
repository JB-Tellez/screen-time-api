'use strict';


var mongoose = require('mongoose'), Kid = mongoose.model('Kid'), Viewing = mongoose.model('Viewing');

exports.list_all_viewings = function (req, res) {
  Viewing.find({}).exec(function (err, viewing) {
    if (err)
      res.send(err);
    res.json(viewing);
  });
};

exports.create_a_viewing = function (req, res) {
  var new_viewing = new Viewing(req.body);
  new_viewing.save(function (err, viewing) {
    if (err)
      res.send(err);

    Kid.findByIdAndUpdate(viewing.kid, {$push:{'viewings':viewing}},{new: true}).exec(function (err, viewing) {
    if (err)
      res.send(err);
    console.log(viewing)
    res.json(viewing);
  });
  });
};


exports.read_a_viewing = function (req, res) {
    console.log('read_a_viewing', req.params.viewingId);
  Viewing.findById(req.params.viewingId).populate('kid').exec(function (err, viewing) {
    if (err)
      res.send(err);
    res.json(viewing);
  });
};

exports.update_a_viewing = function (req, res) {
  Viewing.findOneAndUpdate({
    _id: req.params.viewingId
  }, req.body, {
    new: true
  }, function (err, viewing) {
    if (err)
      res.send(err);
    res.json(viewing);
  });
};

exports.delete_a_viewing = function (req, res) {

    Viewing.remove({
    _id: req.params.viewingId
  }, function (err, viewing) {
    if (err)
      res.send(err);
    res.json({
      message: 'Viewing successfully deleted'
    });
  });
};
