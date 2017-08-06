'use strict';
module.exports = function (app) {
  var familyController = require('../controllers/familyController');


  app.route('/api/families')
    .get(familyController.list_all_families)
    .post(familyController.create_a_family);


  app.route('/api/families/:familyId')
    .get(familyController.read_a_family)
    .put(familyController.update_a_family)
    .delete(familyController.delete_a_family);
};
