'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'HostName',
    user: 'UserName',
    password: 'Password',
    database: 'DatabaseName'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;