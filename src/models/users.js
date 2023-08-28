const dbconfiguration = require('../config/db_mysql');
const dbconfig = dbconfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbconfig);


exports.getAllModel = (callback) => {
    const query = 'SELECT * FROM t_login';
    connection.query(query, callback);
};

exports.postUsersLogin = (username, pass, callback) => {
    const query = `SELECT * FROM t_login WHERE username = ? AND pass = ?`;
    connection.query(query, [username, pass], callback);
};


// Tambahkan fungsi CRUD lainnya jika diperlukan
