const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

let credentials = require('../../../dbCreds.json');
const connection = mysql.createConnection(credentials);

//get all carts
router.get('/', function(req, res, next) {
    let query = `SELECT * FROM Cart`;
  
      connection.query(query, (err, results) => {
        if (err) {
          console.log(err);
          connection.end();
          throw err;
        }
        res.json(results);
   
    });
  });


// // CONNECT TO DB
// // variable that holds db credentials
// let myCredentials = require('../../dbCreds.json');

// // create the connection to database
// const connection = mysql.createConnection(myCredentials);


// // get all address
// connection.query(
//   'SELECT * FROM `Address`',
//   function (err, results) {
//     if (err) {
//       console.log(err);
//     }
//     console.log(results); // results contains rows returned by server

//   }
// );

  

// // CONNECT TO DB
// // variable that holds db credentials
// let myCredentials = require('../../../dbCreds.json');

// // create the connection to database
// const connection = mysql.createConnection(myCredentials);


// //fetch all carts
// router.get('/', function (req, res, next) {
//     connection.query(
//         'SELECT * FROM `Address`',
//         function (err, results) {
//             if (err) {
//                 console.log(err);
//               }
//               console.log(results);
//         }
//     );
// });


module.exports = router;

