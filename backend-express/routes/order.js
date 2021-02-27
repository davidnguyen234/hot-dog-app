var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
let myCredentials = require('../../../dbCreds.json');
const connection = mysql.createConnection(myCredentials);


///Returns all the data in this route//
router.get('/',(req, res, next) => {
   let mySQLQuery=  'SELECT * FROM `Order`';

  //connection.connect();
  connection.query(mySQLQuery, (error, results) => {
   if(error) {
      console.log(mySQLQuery, error);
      res.sendStatus(500);
     }else {
        res.send(results);
     } 
     })
  //connection.end();
});

// // Returns /value"
// router.get('/:id',(req, res, next) => {
//    let mySQLQuery=  `SELECT * FROM order WHERE order_id = '${req.params.id}'`;
// if (req.params.id){
//    mySQLQuery= `SELECT * FROM order WHERE order_id = '${req.params.id}'`;
// }else{
//    mySQLQuery= `SELECT * FROM order`;
// }
//   //connection.connect();
//   connection.query(mySQLQuery, (error, results) => {
//      if(error) {
//         res.sendStatus(500);
//      }else {
//         res.send(results);
//      }
//      })
//   //connection.end();
// });

// router.post('/order/:id/complete', (req, res, next) => {
//    let mySQLQuery = `UPDATE Vendor SET order_status = 1 WHERE order_id = ${Number(req.params.id)} `;
//    connection.query(mySQLQuery, (error, results) => {
//       if(error) {
//          res.sendStatus(500);
//       }else {
//          res.send(results);
//       }
//       });
// })



module.exports = router; 