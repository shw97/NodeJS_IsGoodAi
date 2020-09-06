'user strict';
var sql = require('./db.js');

//object constructor
console.log('AppModel')

var Credential = function(credential){
    this.Sr_No = credential.Sr_No;
    this.Name = credential.Name;
    this.Details = credential.Details;
    this.Disease = credential.Disease;
   
};

console.log(this.credential);

Credential.getAllCredential = function (result) {
        sql.query("Select * from credential", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('credential : ', res);  

                 result(null, res);
                }
            });   
};


module.exports= Credential;