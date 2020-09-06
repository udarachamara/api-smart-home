const mysql = require('mysql');
const dbConfig = require('../config/db.config')

const conn = mysql.createPool({
    connectionLimit: 10,
    password: dbConfig.password,
    user: dbConfig.user,
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.database

})

module.exports = conn;