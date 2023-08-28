const dbconfiguration = require('../config/db_mysql');
const dbconfig = dbconfiguration;
const mysql = require('mysql');
const connection = mysql.createConnection(dbconfig);

exports.getAllHasilRole3 = (callback) => {
    const query = 'SELECT * FROM input_role_tiga';
    connection.query(query, callback);
}

exports.getByIdHasilRole3 = (id, callback) => {
    const query = 'SELECT * FROM input_role_tiga WHERE id = ?';
    connection.query(query, id, callback);
}

exports.postHasil = (data, callback) => {
    const{
        lokasi_perbaikan, foto_pekerjaan, nmuser, catatan, longtitude, latitude
    } = data;
    const query = 'INSERT INTO input_role_tiga (lokasi_perbaikan, foto_pekerjaan, nmuser, catatan, longtitude, latitude, 	) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) ';
    connection.query(query, [lokasi_perbaikan, foto_pekerjaan, nmuser, catatan, longtitude, latitude], callback);
}

exports.putDataRole3 = (updateData,id,  callback) => {
    const query = `UPDATE input_role_tiga SET lokasi_perbaikan = ?, foto_pekerjaan = ?, nmuser = ?, catatan = ?, longtitude = ?, latitude =?, nama_sr =?, harga_sr =?, nama_jasan =?, harga_jasa =?, nama_aksesoris =?, harga_aksesoris =?, nama_material =?, harga_material =? WHERE id = ?`
    connection.query(query, [updateData.lokasi_perbaikan, updateData.foto_pekerjaan, updateData.nmuser, updateData.catatan, updateData.longtitude, updateData.latitude, updateData.nama_sr, updateData.harga_sr, updateData.nama_jasa, updateData.harga_jasa, updateData.nama_aksesoris, updateData.harga_aksesoris, updateData.nama_material,updateData.harga_material ,id], callback);
}

exports.deleteDataRole3 = (id, callback) => {
    const query = 'DELETE FROM input_role_tiga WHERE id =?';
    connection.query(query, id, callback);
}

exports.postDataRole3 = (data, callback) => {
    const {
        tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude
    } = data;
    
    const query = 'INSERT INTO tt_rabhasil (tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    connection.query(query, [tgl_survey, noagenda, nama, alamat, contact, note, idkategori, kditem, nama_barang, satuan, harga_barang, qty, jumlah, image, nmuser, longtitude, latitude], callback);
}

   
exports.updateDataRole3 = (id, updateData, callback) => {
    const {
        lokasi_perbaikan, foto_pekerjaan,  nmuser, catatan,  longtitude, latitude
} = updateData;

    const query = 'UPDATE input_role_tiga SET lokasi_perbaikan=?, foto_pekerjaan=?, nmuser=?, catatan=?, longtitude=?, latitude=?  WHERE id=?';

    connection.query(query, [lokasi_perbaikan, foto_pekerjaan,  nmuser, catatan,  longtitude, latitude, id], callback);

}
