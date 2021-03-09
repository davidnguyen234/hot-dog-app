var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET(all) Get all Address. */
router.get('/', function (req, res, next) {
    // Return all Items
    db.query(
        'SELECT * FROM address',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});

/* GET(id) get all the Addresses from every vendor. */
router.get('/:id', function (req, res, next) {
    // Return address by id
    db.query(
        'SELECT vendor_id, address_id, address_longitude, address_latitude FROM address JOIN vendor USING(address_id)',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});


/* POST(id) edit the address id for the given vendor id. */
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
module.exports = router;