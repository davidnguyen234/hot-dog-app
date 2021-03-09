var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET(all) Get all Address. */
router.get('/', function (req, res, next) {
    // Return all Items
    db.query(
        // 'SELECT address_id, inventory_id, inventory_type, inventory_avail FROM `vendor_has_inventory` JOIN `inventory` USING(inventory_id) ORDER BY vendor_id;',
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});

/* GET(id) Get the address from the given vendor id. */
router.get('/:id', function (req, res, next) {
    // Return Item by id
    db.query(
        // 'SELECT vendor_id, inventory_id, inventory_type, inventory_avail FROM `vendor_has_inventory` JOIN `inventory` USING(inventory_id) WHERE vendor_id = ' + req.params.id,
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        }
    );
});


/* POST(id) edit the address id forthe given venfor id. */
router.put('/:id', function (req, res, next) {
    const inventoryAvail = req.body.inventory_avail;
    const inventoryId = req.body.inventory_id;
    const sqlUpdate =
        // 'UPDATE `Vendor_has_Inventory` SET inventory_avail = ? WHERE vendor_id = ' + req.params.id + ' && inventory_id = ?';
    db.query(sqlUpdate, [inventoryAvail, inventoryId],
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