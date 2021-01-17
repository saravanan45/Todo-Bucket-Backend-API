const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'test'
})

connection.connect(function (err){
    if(err) throw err;
        console.log('database connected');
});

module.exports = connection;