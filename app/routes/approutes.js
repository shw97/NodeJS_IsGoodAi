'use strict';
module.exports = function(app) {
  var credential = require('../controller/appController');


   app.route('/table')
    .get(credential.read_a_credential);
    };
