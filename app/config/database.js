const Sequelize = require('sequelize');

const db = new Sequelize('nodejs', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = db;