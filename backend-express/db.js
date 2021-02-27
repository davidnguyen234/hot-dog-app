// CONNECT TO DATABASE
const mysql = require('mysql2');
let myCredentials = require( '../../dbCreds.json');
let connection = mysql.createConnection(myCredentials);

// return the connection 
module.exports = connection;