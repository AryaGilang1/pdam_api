const dbConfiguration = require('../config/db_mysql');
const dbConfig = dbConfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);

exports.getAllAksesoris = (callback) => {
    const query = 'SELECT * FROM tm_rabasesoris';
    connection.query(query, callback);
};

exports.getIdAksesoris = (id, callback ) => {
    const query = 'SELECT * FROM tm_rabasesoris WHERE id = ?';
    connection.query(query, id,callback);
}