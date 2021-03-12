var express = require('express');
var router = express.Router();
var db = require('../db');

// Gets all the vendors
router.get('/', (req, res, next) => {
   let mySQLQuery = `SELECT * FROM vendor`;
   db.query(mySQLQuery, (err, results) => {
      if (!err) {
         res.send(results);
     } else {
         console.log(err);
     }
   })
});

// Gets the vendor by ID
router.get('/:id', (req, res, next) => {
   let mySQLQuery = `SELECT * FROM vendor WHERE vendor_id = '${req.params.id}'`;
   db.query(mySQLQuery, (err, results) => {
      if (!err) {
         res.send(results);
     } else {
         console.log(err);
     }
   })
});

// UPDATE the address_id in the vendor table with the given vendor_id. */
router.put('/:id', function (req, res, next) {
   const addressId = req.body.address_id;
   const sqlUpdate = `UPDATE vendor SET address_id = ? WHERE vendor_id = ${req.params.id}`;
   db.query(sqlUpdate, [addressId],
       function (err, results) {
           if (!err) {
               return res.send(results);
           } else {
               return console.log(err);
           }
       }
   );
});

// UPDATE the vendor_avail in the vendor table with the given vendor_id. */
router.put('/:id/:avail', function (req, res, next) {
    let sqlUpdate = `UPDATE vendor SET vendor_avail = ${req.params.avail} WHERE vendor_id = ${req.params.id}`;
    db.query(sqlUpdate, (err, results) => {
        if (!err) {
           res.send(results);
       } else {
           console.log(err);
       }
     })
 });
module.exports = router;
