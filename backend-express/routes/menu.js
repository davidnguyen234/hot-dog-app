var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET(all) Items from each vendor. */
router.get('/', function (req, res, next) {
    // Return vendor 101 items
    db.query(
        'SELECT * FROM `vendor_has_inventory` JOIN `inventory` USING(inventory_id) WHERE vendor_id = 101 && inventory_avail > 0;',
        function (err, results) {
            if (!err) {

                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});

/* GET(id) Item from the given vendor id. */
router.get('/:id', function (req, res, next) {
    // Return Item by id
    db.query(
        'SELECT vendor_id, inventory_id, inventory_type, inventory_avail FROM `vendor_has_inventory` JOIN `inventory` USING(inventory_id)GROUP BY `inventory_type` WHERE vendor_id = ' + req.params.id,
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