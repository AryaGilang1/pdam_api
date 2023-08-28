const dbConfiguration = require('../config/db_mysql');
const dbConfig = dbConfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);

exports.getAllJasa = (callback) => {
    const query = 'SELECT * FROM tm_rabjasa'
    connection.query(query, callback)
};

exports.getIdJasa = (id, callback) => {
    const query = 'SELECT * FROM tm_rabjasa WHERE id = ?';
    connection.query(query, id, callback);
}