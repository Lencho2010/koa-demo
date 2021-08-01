// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'hadoop104',
//     user: 'root',
//     password: '123456',
//     database: 'db2021'
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results)
//     console.log(fields)
//     console.log('The solution is: ', results[0].solution);
// });

const pgDb = require('../server/utils/postgres.js');
(async function () {
    const res =  await pgDb.query('select * from users where username = $1;',['lucy'])
    console.log(res.rows);
})()