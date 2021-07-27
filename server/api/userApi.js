const DBHelper = require('../utils/DBHelper');
const sql = require('../sqlMap');

const addUser = () => {
    let sqlStr = sql.user.add;
    let params = { name: 'Lencho', age: 17 }
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.name, params.age], (err, result) => {
        if (err) {
            throw err
        } else {
            console.log('添加用户成功')
        }
    });
    conn.end();
}

const selectUser = () => {
    let sqlStr = sql.user.select;
    let params = { name: 'Lencho' };
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.name], (err, result) => {
        if (err) {
            throw err
        } else {
            console.log(result[0]);
        }
    });
    conn.end();
}

selectUser()