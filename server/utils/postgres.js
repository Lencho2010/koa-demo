/**postgres.js*/
const Pool = require('pg-pool');

const config = {
    user: 'postgres',
    password: 'root',
    host: 'hadoop104',
    port: 5432,
    database: 'db01',
    // ssl: true
};

const pool = new Pool(config);

exports.query = (SQL, value) =>{
    return new Promise((resolve, reject) => {
        pool.connect((err,client) => {
            if(err) reject(err);
            client.query(SQL, value, (err, res) => {
                // client操作完后建议手动进行释放
                client.release();
                if(err) reject(err);
                resolve(res);
            });
        });
    });
};