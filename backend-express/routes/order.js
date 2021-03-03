var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
let myCredentials = require('../../../dbCreds.json');
const connection = mysql.createConnection(myCredentials);


///Returns all the data in this route//
router.get('/',(req, res, next) => {
   let mySQLQuery=  'SELECT * FROM `Order`';

  //connection.connect();
  setTimeout(() => {
   connection.query(mySQLQuery, (error, results) => {
      if(error) {
         console.log(mySQLQuery, error);
         res.sendStatus(500);
        }else {
           res.send(results);
        } 
        })
     //connection.end();
  },3000);
});

// Returns /value"
router.get('/:id',(req, res, next) => {
   let mySQLQuery=  'SELECT * FROM `order` WHERE order_id ='+ req.params.id;

  //connection.connect();
  connection.query(mySQLQuery, (error, results) => {
     if(error) {
        res.sendStatus(500);
     }else {
        res.send(results);
     }
     })
  //connection.end();
});


//update order status
router.put('/:id', (req, res, next) => {
   let mySQLQuery = `UPDATE order SET  ${req.params.order_status} = 1 WHERE order_ id = ${req.params.id}`;
   connection.query(mySQLQuery, (error, results) => {
      if(error) {
         res.sendStatus(500);  
      }else {
         res.send(results);
      }
      });
})


//Create order
router.post('/',(req, res, next) => {
   let mySQLQuery=  `INSERT INTO 'order' order_id, vendor_id ,cust_id,
                      order_price, order_date_time, order_status) VALUES
               (${req.body.order_id},${req.body.vendor_id},${req.body.cust_id},
               ${req.body.order_price},${req.body.order_date_time},${req.body.order_status}`;  
  //connection.connect();
  connection.query(mySQLQuery, (error, results) => {
     if(error) {
        res.send(500);
     }
        res.send(results);
     })
  //connection.end();
});

module.exports = router; 