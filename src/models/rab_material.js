const dbConfiguration = require('../config/db_mysql');
const dbConfig = dbConfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);

exports.getAllMaterial = (callback) => {
    const query = 'SELECT * FROM tm_rabharga';
    connection.query(query, callback)
}

exports.getIdMaterial = (id, callback) => {
    const query = 'SELECT * FROM tm_rabharga WHERE id = ?'
    connection.query(query, id, callback)
}