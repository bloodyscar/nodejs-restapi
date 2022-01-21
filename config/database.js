const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_js'
});

connection.connect((e) => {
    if (e) {
        console.log(e);
    } else {
        console.log('Connection Succuessfully!');
    }
})

module.exports = connection;