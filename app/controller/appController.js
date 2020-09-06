'use strict';
    

var Credential = require('../model/appModel.js');
console.log('Appcontroller')
exports.list_all_credential = function(req, res) {
  console.log("Read full registry")
  Credential.getAllCredential(function(err, credential) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', credential);
    res.send(credential);
  });
};


exports.read_a_credential = function(req, res) {
  
  Credential.getAllCredential(function(err, credential) {
    if (err)
      res.send(err);
    res.json(credential);
  });
};

