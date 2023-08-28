const dbConfiguration = require('../config/db_mysql');
const dbConfig = dbConfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);

exports.getAllRab = (callback) => {
    const query = 'SELECT * FROM input_hasil';
    connection.query(query, callback);
};

exports.getIdRab = (id, callback ) => {
    const query = 'SELECT * FROM input_hasil WHERE id = ?';
    connection.query(query, id,callback);
}

exports.postDataRab = (data, callback) => {
    const {
        nama_sr, harga_sr, nama_jasa, harga_jasa, nama_aksesoris,
        harga_aksesoris, nama_material, harga_material
    } = data;

    const query = 'INSERT INTO input_hasil (nama_sr, harga_sr, nama_jasa, harga_jasa, nama_aksesoris, harga_aksesoris, nama_material, harga_material) VALUES (?,?,?,?,?,?,?,?)';

    connection.query(query, [nama_sr, harga_sr, nama_jasa, harga_jasa, nama_aksesoris, harga_aksesoris, nama_material, harga_material], callback);
}

exports.deleteDataRab = (id, callback) => {
    const query = 'DELETE FROM input_hasil WHERE id = ?';
    connection.query(query, id, callback);
}

exports.putDataRab = (id, updateData, callback) => {
    const query = `UPDATE input_hasil SET nama_sr = ?, harga_sr = ?, nama_jasa = ?, harga_jasa = ?, nama_aksesoris = ?, harga_aksesoris = ?, nama_material = ?, harga_material = ? WHERE id = ?`;
    connection.query(query, [updateData.nama_sr, updateData.harga_sr, updateData.nama_jasa, updateData.harga_jasa, updateData.nama_aksesoris, updateData.harga_aksesoris, updateData.nama_material, updateData.harga_material, id], callback);
}