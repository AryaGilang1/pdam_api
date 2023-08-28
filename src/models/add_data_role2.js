const dbConfiguration = require('../config/db_mysql');
const dbConfig = dbConfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbConfig);


exports.getAllRoleDua = (callback) => {
    const query = 'SELECT * FROM tt_rabhasil';
    connection.query(query, callback);
}

exports.getByIdRoleDua = (id ,callback) => {
    const query = 'SELECT * FROM tt_rabhasil WHERE id = ?';
    connection.query(query, id, callback);
}

exports.postDataRoleDua = (data, callback) => {
    const {
        tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude, nama_sr, harga_sr, qty_sr, nama_jasa, harga_jasa, qty_jasa, nama_aksesoris, harga_aksesoris, qty_aksesoris, nama_material, harga_material, qty_material
    } = data;
    const query = 'INSERT INTO tt_rabhasil (tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude, nama_sr, harga_sr, qty_sr, nama_jasa, harga_jasa, qty_jasa, nama_aksesoris, harga_aksesoris, qty_aksesoris, nama_material, harga_material, qty_material) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    connection.query(query, [tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude, nama_sr, harga_sr, qty_sr, nama_jasa, harga_jasa, qty_jasa, nama_aksesoris, harga_aksesoris, qty_aksesoris, nama_material, harga_material, qty_material], callback);
}

    
exports.updateDataRole2 = (id, data, callback) => {
    const {
        tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude, nama_sr, harga_sr, qty_sr, nama_jasa, harga_jasa, qty_jasa, nama_aksesoris, harga_aksesoris, qty_aksesoris, nama_material, harga_material, qty_material,
    } = data;
    const query = `UPDATE tt_rabhasil SET tgl_survey=?, noagenda=?, nama=?, alamat=?, contact=?, note=?, idkategori=?, kditem=?, nama_barang=?, satuan=?, harga_barang=?, qty=?, jumlah=?, image=?, nmuser=?, longtitude=?, latitude=?, nama_sr=?, harga_sr=?, qty_sr=?, nama_jasa=?, harga_jasa=?, qty_jasa=?, nama_aksesoris=?, harga_aksesoris=?, qty_aksesoris=?, nama_material=?, harga_material=?, qty_material=? WHERE id=?`;
    connection.query(query, [tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude, nama_sr, harga_sr, qty_sr, nama_jasa, harga_jasa, qty_jasa, nama_aksesoris, harga_aksesoris, qty_aksesoris, nama_material, harga_material, qty_material, id], callback);
}


    exports.deleteDataRole2 = (id, callback) => {
        const query = 'DELETE FROM tt_rabhasil WHERE id = ?';

        connection.query(query, id, callback);
    }