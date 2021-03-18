var express = require('express');
var router = express.Router();
var db = require('../db');
var async = require('async');

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
// Adds a new vendor with the given phone and id adds the all the inventory to the newly added vendor (Inserts into "vendor" and "vendor_has_inventory")
router.post('/vendor/:venPhone/:empId', function (req, res, next) {
   var insert1 = `INSERT INTO vendor VALUES (DEFAULT, '${req.params.venPhone}', '12:00 PM - 8:00 PM', ${req.params.empId}, 4, 0)`;
   var insert2 = `INSERT INTO Vendor_has_Inventory (vendor_id, inventory_id) SELECT v.vendor_id, i.inventory_id FROM (SELECT vendor_id FROM vendor ORDER BY vendor_id DESC LIMIT 1) AS v CROSS JOIN (SELECT inventory_id FROM inventory) AS i;`;
   async.parallel([
    function (parallel_done) {
        db.query(insert1, {}, function (err, results) {
            if (err) return parallel_done(err);
            parallel_done();
        });
    },
    function (parallel_done) {
        db.query(insert2, {}, function (err, results) {
            if (err) return parallel_done(err);
            parallel_done();
        });
    }
],
    function (err, results) {
        if (!err) {
            res.send(results);
        } else {
            console.log(err);
        }
    });
});

// Add a new item to the Inventory table, then adds the new item to each vendor in the "vendor_has_inventory" table
router.post('/item/:itemName/:itemPrice/:itemCost', function (req, res, next) {
    var insert1 = `insert into inventory values (DEFAULT, '${req.params.itemName}', ${req.params.itemPrice}, ${req.params.itemCost})`;
    var insert2 = `INSERT INTO Vendor_has_Inventory (vendor_id, inventory_id) SELECT v.vendor_id, i.inventory_id FROM (SELECT inventory_id FROM Inventory WHERE inventory_type = '${req.params.itemName}') AS i CROSS JOIN (SELECT DISTINCT vendor_id FROM Vendor) AS v`;
    async.parallel([
        function (parallel_done) {
            db.query(insert1, {}, function (err, results) {
                if (err) return parallel_done(err);
                parallel_done();
            });
        },
        function (parallel_done) {
            db.query(insert2, {}, function (err, results) {
                if (err) return parallel_done(err);
                parallel_done();
            });
        }
    ],
        function (err, results) {
            if (!err) {
                res.send(results);
            } else {
                console.log(err);
            }
        });
});

// Add a new employee to the employee table, then adds the new item to each vendor in the "vendor_has_inventory" table
router.post('/employee/:empFName/:empLName/:empPhone', function (req, res, next) {
    var insert1 = `insert into employee values (DEFAULT, '${req.params.empFName}', '${req.params.empLName}', '${req.params.empPhone}')`;
    db.query(
        insert1,
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