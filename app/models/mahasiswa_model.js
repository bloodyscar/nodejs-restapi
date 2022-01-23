const db = require('../config/database');
const Sequelize = require('sequelize');

const mahasiswa = db.define('mahasiswa', {
    nama: Sequelize.STRING,
    jurusan : Sequelize.STRING,
    kelas : Sequelize.STRING,
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = mahasiswa;
