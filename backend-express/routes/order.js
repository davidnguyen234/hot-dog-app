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
router.post('/:id', (req, res, next) => {
   let mySQLQuery = `UPDATE \`order\` SET  order_status = 1 WHERE order_id = ${req.params.id}`;
   connection.query(mySQLQuery, (error, results) => {
      if(error) {
         res.sendStatus(error);  
      }else {
         res.send(results);
      }
      });
})


//Create order
router.post('/',(req, res, next) => {
   let mySQLQuery=  `INSERT INTO \`order\` order_id, vendor_id ,
                      order_price, order_date_time, order_status) VALUES
               (${req.params.order_id},${req.params.vendor_id},
               ${req.params.order_price},${req.params.order_date_time},${req.params.order_status}`;  
  //connection.connect();
  connection.query(mySQLQuery, (error, results) => {
     if(error) {
        res.sendStatus(500);
     }
        res.send(results);
     })
  //connection.end();
});


// router.delete('/:id', (req,res) => {
//    const { id } =req.params.is;
//     let mySQLQuery=  `DELETE FROM \`order\` WHERE order_id = ${req.params.id}`;
//    // mySQLQuery= mySQLQuery.filter((mySQLQuery) =>  order_id != req.params.id);
//    connection.query(mySQLQuery, (error, results) => {
//       if(error) {
//          res.sendStatus(500);
//       }
//          res.send(results);
//       })
// })
module.exports = router; 