var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'hadoop104',
    user     : 'root',
    password : '123456',
    database : 'db2021'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});