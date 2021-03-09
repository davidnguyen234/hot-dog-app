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
module.exports = router;
