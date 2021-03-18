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

router.post('/:itemId/:itemAmount/:orderPrice', function (req, res, next) {
    let post1 = 'INSERT INTO order VALUES (DEFAULT, 101,' + req.params.orderPrice + ', 0)';
    let post2 = 'INSERT INTO `Order_has_Inventory` (order_id, inventory_id, inventory_quantity ) SELECT `orderID`, i.inventory_id, ' + req.params.itemAmount + ' FROM (SELECT (order_id +1) as `orderID` FROM `Order` ORDER BY order_id DESC LIMIT 1) AS o CROSS JOIN (SELECT inventory_id FROM `Inventory` WHERE inventory_id = ' + req.params.itemId + ') AS i';
    db.query(
        post1,
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