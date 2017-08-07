'use strict';
module.exports = function (app) {
  var viewingController = require('../controllers/viewingController');


  app.route('/api/viewings')
    .get(viewingController.list_all_viewings)
    .post(viewingController.create_a_viewing);


  app.route('/api/viewings/:viewingId')
    .get(viewingController.read_a_viewing)
    .put(viewingController.update_a_viewing)
    .delete(viewingController.delete_a_viewing);
};
