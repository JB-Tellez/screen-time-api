'use strict';
module.exports = function (app) {
  var kidController = require('../controllers/kidController');


  app.route('/api/kids')
    .get(kidController.list_all_kids)
    .post(kidController.create_a_kid);


  app.route('/api/kids/:kidId')
    .get(kidController.read_a_kid)
    .put(kidController.update_a_kid)
    .delete(kidController.delete_a_kid);
};
