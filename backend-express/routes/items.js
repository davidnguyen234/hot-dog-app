var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET(all) Items. */
router.get('/', function (req, res, next) {
    // Return all Items
    db.query(
        'SELECT * FROM `Inventory`',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});

/* GET(id) Item. */
router.get('/:id', function (req, res, next) {
    // Return Item by id
    db.query(
        'SELECT * FROM `Inventory` WHERE inventory_id = ' + req.params.id,
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