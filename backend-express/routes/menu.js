var express = require('express');
var router = express.Router();
var db = require('../db');

// /* GET(all) Items. */
// router.get('/', function (req, res, next) {
//     // Return all Items
//     console.log("On Menu Route");
//     db.query('SELECT * FROM `Inventory`', (err, results) => {
//         if (!err) {
//             res.send(results);
//         } else {
//             console.log(err);
//         }
//     }
//     );
// });

/* GET(all) Items from each vendor. */
router.get('/', function (req, res, next) {
    // Return vendor 101 items
    db.query(
        'SELECT * FROM `vendor_has_inventory` JOIN `inventory` USING(inventory_id) WHERE vendor_id = 101;',
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
        'SELECT vendor_id, inventory_id, inventory_type, inventory_avail FROM `vendor_has_inventory` JOIN `inventory` USING(inventory_id) WHERE vendor_id = ' + req.params.id,
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