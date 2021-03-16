var express = require('express');
var router = express.Router();
var db = require('../db');

// Get all the data from the given table name
router.get('/:tableName', function (req, res, next) {
    db.query(
        'SELECT * FROM ' + req.params.tableName + ' ORDER BY ' + req.params.tableName + '_id;',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});

// POST ROUTES
// adds a new vendor with the given phone and id
router.post('/vendor/:venPhone/:empId', function (req, res, next) {
    db.query(
        `INSERT INTO vendor VALUES (DEFAULT, ${req.params.venPhone}, '12:00 PM - 8:00 PM', ${req.params.empId}, 4, 0)`,
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});

router.post('/item/:itemName/:itemPrice/:itemCost', function (req, res, next) {
    db.query(
        `insert into inventory values  (5, '${req.params.itemName}', ${req.params.itemPrice}, ${req.params.itemCost})`,
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