var sql = require('mysql');

var connection = sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'db_test'
});
connection.connect();
module.exports = connection;
