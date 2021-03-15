var express = require('express');
var router = express.Router();
var db = require('../db');


// Returns the orders the are NOT complete (status == 0)
router.get('/', (req, res, next) => {
   let mySQLQuery = 'SELECT * FROM `Orders` WHERE orders_status = 0';
      db.query(mySQLQuery, (error, results) => {
         if (error) {
            console.log(mySQLQuery, error);
            res.sendStatus(500);
         } else {
            res.send(results);
         }
      })
});

// Returns all the orders from the given vendor_id (NOT complete)
router.get('/vendor/:vendorId', (req, res, next) => {
   let mySQLQuery = `SELECT * FROM orders WHERE vendor_id = ${req.params.vendorId} AND orders_status = 0`;
   setTimeout(() => {
      db.query(mySQLQuery, (error, results) => {
         if (error) {
            console.log(mySQLQuery, error);
            res.sendStatus(500);
         } else {
            res.send(results);
         }
      })
   }, 1000);
});

// Returns an order by the orders_id
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

// Update order status to complete (status == 1)
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
               (${req.params.orders_id},${req.params.vendor_id},
               ${req.params.orders_price},${req.params.orders_date_time},${req.params.orders_status}`;
   db.query(mySQLQuery, (error, results) => {
      if (error) {
         res.sendStatus(500);
      }
      res.send(results);
   })
});
module.exports = router;