var express = require('express');
var router = express.Router();
var db = require('../db');


///Returns all the data in this route//
router.get('/', (req, res, next) => {
   let mySQLQuery = 'SELECT * FROM `Orders` WHERE orders_status = 0';
   setTimeout(() => {
      db.query(mySQLQuery, (error, results) => {
         if (error) {
            console.log(mySQLQuery, error);
            res.sendStatus(500);
         } else {
            res.send(results);
         }
      })
   }, 3000);
});

// Returns /value"
router.get('/:id', (req, res, next) => {
   let mySQLQuery = 'SELECT * FROM `orders` WHERE orders_id =' + req.params.id;
   db.query(mySQLQuery, (error, results) => {
      if (error) {
         res.sendStatus(500);
      } else {
         res.send(results);
      }
   })
});


//update order status
router.post('/:id', (req, res, next) => {
   let mySQLQuery = `UPDATE \`orders\` SET  orders_status = 1 WHERE orders_id = ${req.params.id}`;
   db.query(mySQLQuery, (error, results) => {
      if (error) {
         res.sendStatus(error);
      } else {
         res.send(results);
      }
   });
})


//Create order
router.post('/', (req, res, next) => {
   let mySQLQuery = `INSERT INTO \`orders\` orders_id, vendor_id ,
                     orders_price, orders_date_time, orders_status) VALUES
               (${req.params.order_id},${req.params.vendor_id},
               ${req.params.order_price},${req.params.order_date_time},${req.params.order_status}`;
   db.query(mySQLQuery, (error, results) => {
      if (error) {
         res.sendStatus(500);
      }
      res.send(results);
   })
});
module.exports = router;