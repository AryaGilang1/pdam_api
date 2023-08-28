const dbConfiguration = require('../config/db_mysql');
const dbConfig = dbConfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);

exports.getAllSr = (callback) => {
    const query = 'SELECT * FROM tm_rabpaket'
    connection.query(query, callback)
};

exports.getIdSr = (id, callback) => {
    const query = 'SELECT * FROM tm_rabpaket WHERE id = ?';
    connection.query(query, id, callback);
}