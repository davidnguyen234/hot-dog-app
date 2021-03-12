const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

//get credentials
let credentials = require('../../../dbCreds.json');
const connection = mysql.createConnection(credentials);

//get all carts
router.get('/', function(req, res, next) {
  // let query = `SELECT * FROM Address`;
  let query = `SELECT * FROM Address JOIN Vendor USING(address_id)`;
  
      connection.query(query, (err, results) => {
        if (err) {
          console.log(err);
          connection.end();
          throw err;
        }
        res.json(results);
   
    });
  });

module.exports = router;

