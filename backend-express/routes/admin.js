var express = require('express');
var router = express.Router();
var db = require('../db');

// GET ROUTES
// get all inventory item
router.get('/items', function (req, res, next) {
    db.query(
        'SELECT * FROM inventory ORDER BY inventory_id;',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});
// get all vendors
router.get('/vendor', function (req, res, next) {
    db.query(
        'SELECT * FROM vendor ORDER BY vendor_id;',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});
// get all orders
router.get('/orders', function (req, res, next) {
    db.query(
        'SELECT * FROM orders ORDER BY orders_id;',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});
// get all addresses
router.get('/address', function (req, res, next) {
    db.query(
        'SELECT * FROM address ORDER BY address_id;',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});
module.exports = router;