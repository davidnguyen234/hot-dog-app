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

/* GET(id) Address from the given vendor id. */
router.get('/:id', function (req, res, next) {
    // Return Item by id
    db.query(
        `SELECT * FROM address WHERE vendor_id = ${req.params.id}`,
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